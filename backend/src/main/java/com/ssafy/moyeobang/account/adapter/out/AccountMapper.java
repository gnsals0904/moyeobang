package com.ssafy.moyeobang.account.adapter.out;

import static java.util.stream.Collectors.toCollection;
import static java.util.stream.Stream.concat;

import com.ssafy.moyeobang.account.adapter.out.persistence.member.MemberInfo;
import com.ssafy.moyeobang.account.application.domain.Deposit;
import com.ssafy.moyeobang.account.application.domain.Member;
import com.ssafy.moyeobang.account.application.domain.Members;
import com.ssafy.moyeobang.account.application.domain.Money;
import com.ssafy.moyeobang.account.application.domain.Settle;
import com.ssafy.moyeobang.account.application.domain.Settles;
import com.ssafy.moyeobang.account.application.domain.Transaction;
import com.ssafy.moyeobang.account.application.domain.Transactions;
import com.ssafy.moyeobang.account.application.domain.WithdrawTag;
import com.ssafy.moyeobang.account.application.domain.Withdrawal;
import com.ssafy.moyeobang.common.persistenceentity.deposit.DepositJpaEntity;
import com.ssafy.moyeobang.common.persistenceentity.order.OrderJpaEntity;
import com.ssafy.moyeobang.common.persistenceentity.withdraw.WithdrawJpaEntity;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.springframework.stereotype.Component;

@Component
public class AccountMapper {

    public Members mapToMembers(List<MemberInfo> memberInfos) {
        Map<Long, Member> members = memberInfos.stream()
                .collect(Collectors.toMap(
                        MemberInfo::getId,
                        this::mapToMember
                ));

        return new Members(members);
    }

    private Member mapToMember(MemberInfo memberInfo) {
        return new Member(
                memberInfo.getId(),
                memberInfo.getName(),
                memberInfo.getProfileImage(),
                memberInfo.getMemberKey(),
                memberInfo.getAccountNumber()
        );
    }

    public Transactions mapToTransactions(List<DepositJpaEntity> deposits,
                                          List<WithdrawJpaEntity> withdrawals,
                                          Members members) {
        List<Transaction> transactions = concat(depositStream(deposits, members), withdrawStream(withdrawals, members))
                .sorted(Comparator.comparing(Transaction::getTimestamp))
                .collect(toCollection(ArrayList::new));

        return new Transactions(transactions);
    }

    private Stream<Transaction> depositStream(List<DepositJpaEntity> deposits,
                                              Members members) {
        return deposits.stream()
                .map(deposit -> mapToDeposit(deposit, members));
    }

    private Stream<Transaction> withdrawStream(List<WithdrawJpaEntity> withdrawals,
                                               Members members) {
        return withdrawals.stream()
                .map(withdrawal -> mapToWithdrawal(withdrawal, members));
    }

    private Transaction mapToDeposit(DepositJpaEntity deposit, Members members) {
        return Deposit.builder()
                .transactionId(deposit.getId())
                .transactionAccountNumber(deposit.getTravelAccount().getAccountNumber())
                .timestamp(deposit.getCreatedAt())
                .money(Money.of(deposit.getAmount()))
                .balanceSnapshot(Money.of(deposit.getBalanceSnapshot()))
                .depositMember(members.getMember(deposit.getMemberId()))
                .build();
    }

    private Transaction mapToWithdrawal(WithdrawJpaEntity withdrawal, Members members) {
        List<Settle> settles = withdrawal.getOrderJpaEntities().stream()
                .map(order -> mapToSettle(order, members))
                .toList();

        return Withdrawal.builder()
                .transactionId(withdrawal.getId())
                .transactionAccountNumber(withdrawal.getTargetAccountNumber())
                .timestamp(withdrawal.getCreatedAt())
                .money(Money.of(withdrawal.getAmount()))
                .balanceSnapshot(Money.of(withdrawal.getBalanceSnapshot()))
                .title(withdrawal.getTitle())
                .address(withdrawal.getPlaceAddress())
                .tag(WithdrawTag.findBy(withdrawal.getWithdrawTypeDescription()))
                .settleType(withdrawal.getSettleType().name())
                .settles(new Settles(settles))
                .build();
    }

    private Settle mapToSettle(OrderJpaEntity order, Members members) {
        Map<Long, Long> settles = order.getSettle();

        Map<Member, Money> settle = order.getSettle().keySet().stream()
                .collect(Collectors.toMap(
                        members::getMember,
                        key -> Money.of(settles.get(key))
                ));

        return new Settle(
                order.getId(),
                order.getTitle(),
                settle
        );
    }
}
