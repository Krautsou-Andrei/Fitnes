import type { TrainingDto } from '../api/types';
import type { TrainingType } from '../model/types';

export function mapTraining(dto: TrainingDto): TrainingType {
    return {
        id: dto._id,
        name: dto.name,
        date: dto.date,
        isImplementation: dto.isImplementation,
        userId: dto.userId,
        parameters: {
            repeat: dto.parameters.repeat,
            period: dto.parameters.period,
            jointTraining: dto.parameters.jointTraining,
            participants: dto.parameters.participants,
        },
        exercises: dto.exercises.map((item) => ({
            id: item._id,
            name: item.name,
            replays: item.replays,
            weight: item.weight,
            approaches: item.approaches,
            isImplementation: item.isImplementation,
        })),
    };
}
