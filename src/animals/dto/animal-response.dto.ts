import { AnimalDto } from './animal.dto';
import { ApiModelProperty } from "@nestjs/swagger";
import { MetaDto } from 'common/dto/meta.dto';

export class AnimalResponseDto {

    @ApiModelProperty({ type: AnimalDto, isArray: true })
    data: AnimalDto[];

    meta: MetaDto;

    constructor(data: AnimalDto[], totalItems: number, pageSize: number, page: number) {
        this.data = data;
        this.meta = new MetaDto(Math.ceil(totalItems / pageSize), totalItems, pageSize, page);
    }

}
