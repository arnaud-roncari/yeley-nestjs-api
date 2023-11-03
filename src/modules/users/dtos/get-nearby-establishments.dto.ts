import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsNumber } from 'class-validator';
import { EstablishmentType, Tags } from 'src/commons/constants';

export class GetNearbyEstablishmentsDto {
  constructor(parameters: GetNearbyEstablishmentsDto) {
    Object.assign(this, parameters);
  }

  @ApiProperty({ example: 10, description: 'Range expressed as circle, in KM' })
  @IsNumber()
  range: number;

  @ApiProperty({
    example: [10.1367, 74.8984],
    description: 'Long Lat coordinates of the user position',
    isArray: true,
  })
  @IsArray()
  coordinates: number[];

  @ApiProperty({
    example: EstablishmentType.restaurant,
    description: 'Establishment type',
  })
  @IsEnum(EstablishmentType)
  type: EstablishmentType;

  @ApiProperty({
    example: [Tags.indian, Tags.mexican],
    description: 'Tags used as filters',
    isArray: true,
  })
  @IsEnum(Tags, { each: true })
  @IsArray()
  tags: Tags[];
}
