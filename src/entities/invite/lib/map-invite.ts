import type { Invite } from '../model/types';
import type { InviteDto } from '../api/types';

import { mapTraining } from '@entities/training/@ex/invite';

export function mapInvite(dto: InviteDto): Invite {
    return {
        id: dto._id,
        from: {
            id: dto.from._id,
            firstName: dto.from.firstName,
            lastName: dto.from.lastName,
            imageSrc: dto.from.imageSrc,
        },
        training: mapTraining(dto.training),
        status: dto.status,
        createdAt: dto.createdAt,
    };
}
