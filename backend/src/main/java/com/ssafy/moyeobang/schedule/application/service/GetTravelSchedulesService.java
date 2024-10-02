package com.ssafy.moyeobang.schedule.application.service;

import com.ssafy.moyeobang.common.annotation.UseCase;
import com.ssafy.moyeobang.common.persistenceentity.withdraw.SettleType;
import com.ssafy.moyeobang.schedule.adapter.in.web.response.DayScheduleResponse;
import com.ssafy.moyeobang.schedule.adapter.in.web.response.LocationResponse;
import com.ssafy.moyeobang.schedule.adapter.in.web.response.MatchedTransactionResponse;
import com.ssafy.moyeobang.schedule.adapter.in.web.response.ParticipantResponse;
import com.ssafy.moyeobang.schedule.adapter.in.web.response.ScheduleResponse;
import com.ssafy.moyeobang.schedule.adapter.in.web.response.TravelScheduleResponse;
import com.ssafy.moyeobang.schedule.adapter.in.web.response.UnmatchedTransactionResponse;
import com.ssafy.moyeobang.schedule.application.domain.Schedule;
import com.ssafy.moyeobang.schedule.application.domain.Transaction;
import com.ssafy.moyeobang.schedule.application.port.in.GetTravelSchedulesUseCase;
import com.ssafy.moyeobang.schedule.application.port.out.LoadTravelSchedulesPort;
import com.ssafy.moyeobang.schedule.error.ErrorCode;
import com.ssafy.moyeobang.schedule.error.ScheduleException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;

@UseCase
@RequiredArgsConstructor
public class GetTravelSchedulesService implements GetTravelSchedulesUseCase {

    private final LoadTravelSchedulesPort loadTravelSchedulesPort;

    @Override
    public TravelScheduleResponse getTravelSchedules(long travelId) {
        List<Schedule> schedules = loadTravelSchedulesPort.loadSchedulesByTravelId(travelId);

        if (schedules.isEmpty()) {
            throw new ScheduleException(ErrorCode.TRAVEL_SCHEDULE_NOT_FOUND);
        }

        Map<LocalDate, List<Schedule>> schedulesByDate = schedules.stream()
                .filter(schedule -> schedule.getScheduleStartTime() != null)
                .collect(Collectors.groupingBy(schedule -> schedule.getScheduleStartTime().toLocalDate()));

        List<LocalDate> sortedDates = schedulesByDate.keySet().stream()
                .sorted()
                .toList();

        List<DayScheduleResponse> daySchedulesList = new ArrayList<>();
        int dayNum = 1;
        for (LocalDate date : sortedDates) {
            List<Schedule> daySchedules = schedulesByDate.get(date);

            daySchedules.sort(Comparator.comparingInt(Schedule::getSequence));

            List<ScheduleResponse> scheduleDTOs = daySchedules.stream()
                    .map(this::mapScheduleToDTO)
                    .toList();

            daySchedulesList.add(new DayScheduleResponse(dayNum++, date, scheduleDTOs));
        }

        List<UnmatchedTransactionResponse> unmatchedTransactions = schedules.stream()
                .filter(schedule -> schedule.getTransaction() != null && !schedule.getTransaction().isMatched())
                .map(this::mapUnmatchedTransactionToDTO)
                .collect(Collectors.toList());

        return new TravelScheduleResponse(daySchedulesList, unmatchedTransactions);
    }

    private ScheduleResponse mapScheduleToDTO(Schedule schedule) {
        LocationResponse locationDTO = new LocationResponse(
                schedule.getLocation().getGooglePlaceId(),
                schedule.getLocation().getTitle(),
                schedule.getLocation().getAddress(),
                schedule.getLocation().getLatitude(),
                schedule.getLocation().getLongitude(),
                "카테고리" // TODO : 카테고리 받아서 리턴하는 로직 추가 필요
        );

        MatchedTransactionResponse transactionDTO = null;
        if (schedule.getTransaction() != null && schedule.getTransaction().isMatched()) {
            transactionDTO = new MatchedTransactionResponse(
                    schedule.getTransaction().getTransactionId(),
                    schedule.getTransaction().getPaymentName(),
                    (int) schedule.getTransaction().getTotalPrice(),
                    schedule.getTransaction().getPaymentTime(),
                    schedule.getTransaction().getSplitMethod().name(),
                    schedule.getTransaction().getParticipantsInfo().stream()
                            .map(participant -> new ParticipantResponse(participant.getMemberId()))
                            .collect(Collectors.toList())
            );
        }

        return new ScheduleResponse(
                schedule.getScheduleId(),
                schedule.getTitle(),
                locationDTO,
                schedule.getScheduleStartTime(),
                schedule.getBudget(),
                schedule.getCompletion().name(),
                schedule.getMemo(),
                schedule.getImageUrl(),
                transactionDTO
        );
    }

    private UnmatchedTransactionResponse mapUnmatchedTransactionToDTO(Schedule schedule) {
        Transaction transaction = schedule.getTransaction();

        return new UnmatchedTransactionResponse(
                transaction.getTransactionId(),
                transaction.getPaymentName(),
                schedule.getLocation().getLatitude(),
                schedule.getLocation().getLongitude(),
                transaction.getTotalPrice(),
                transaction.getPaymentTime(),
                transaction.getSplitMethod() != null ? transaction.getSplitMethod().name() : SettleType.CUSTOM.name(),
                transaction.getParticipantsInfo().stream()
                        .map(participant -> new ParticipantResponse(participant.getMemberId()))
                        .toList()
        );
    }
}
