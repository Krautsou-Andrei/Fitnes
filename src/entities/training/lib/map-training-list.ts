import { TrainingName } from '../model/types';
import { TrainingNameDto } from '../api/types';

export function mapTrainingList(dto: TrainingNameDto): TrainingName {
    return {
        name: dto.name,
        key: dto.key,
    };
}
