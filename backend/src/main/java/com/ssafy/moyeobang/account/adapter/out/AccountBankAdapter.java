package com.ssafy.moyeobang.account.adapter.out;

import com.ssafy.moyeobang.account.adapter.out.bank.BankRepository;
import com.ssafy.moyeobang.account.adapter.out.persistence.account.TravelAccountRepository;
import com.ssafy.moyeobang.account.application.port.out.CreateAccountPort;
import com.ssafy.moyeobang.common.annotation.PersistenceAdapter;
import com.ssafy.moyeobang.common.persistenceentity.travel.TravelAccountJpaEntity;
import lombok.RequiredArgsConstructor;

@PersistenceAdapter
@RequiredArgsConstructor
public class AccountBankAdapter implements CreateAccountPort {

    private final TravelAccountRepository travelAccountRepository;
    private final BankRepository bankRepository;

    @Override
    public String createAccount(String memberKey) {
        String accountNumber = bankRepository.createAccount(memberKey);

        TravelAccountJpaEntity account = TravelAccountJpaEntity.builder()
                .accountNumber(accountNumber)
                .build();

        travelAccountRepository.save(account);

        return accountNumber;
    }
}