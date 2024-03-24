import { TariffDto } from '../api/types';
import { Tariff } from '../model/types';

export function mapGetTariffList(dto: TariffDto): Tariff {
console.log("dto", dto)
    return {
        name: dto.name,
        periods: dto.periods,
        id: dto._id,
    };
}
