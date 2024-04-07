import type { PalDto } from '../api/types';
import type { Pal } from '../model/types';

export function mapPals(dto: PalDto): Pal {
    return {
        id: dto.id,
        name: dto.name,
        trainingType: dto.trainingType,
        imageSrc: dto.imageSrc,
        avgWeightInWeek: dto.avgWeightInWeek,
        inviteId: dto.inviteId,
        status: dto.status,
    };
}
