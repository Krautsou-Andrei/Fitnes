import { UserDto } from '../api/types';
import { User } from '../model/types';

export function mapGetUser(dto: UserDto): User {
    return {
        email: dto.email,
        firstName: dto.firstName,
        lastName: dto.lastName,
        birthday: dto.birthday,
        imgSrc: dto.imgSrc,
        readyForJointTraining: dto.readyForJointTraining,
        sendNotification: dto.sendNotification,
        tariff: dto.tariff,
    };
}
