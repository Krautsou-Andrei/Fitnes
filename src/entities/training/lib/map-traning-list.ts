import { TraningName } from '../model/types';
import { TraningNameDto } from '../api/types';

export function mapTraningList(dto: TraningNameDto): TraningName {
    return {
        name: dto.name,
        key: dto.key,
    };
}
