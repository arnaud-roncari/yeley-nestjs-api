import { IsArray, IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { EstablishmentType, Tags } from 'src/commons/constants';

export class CreateEstablishmentDto {
  @ApiProperty({ example: 'Paul Bakery', description: 'Establishment name' })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'Establishment type',
    enum: Tags,
    example: [Tags.indian, Tags.mexican],
    isArray: true,
  })
  @IsEnum(Tags, { each: true })
  @IsArray()
  readonly tags: Tags[];

  @ApiProperty({
    example: 'Paul 11 rue de la machine, Montpellier, 34000',
    description: 'Establishment full address',
  })
  @IsString()
  readonly fullAddress: string;

  @ApiProperty({
    example: [10.0, 20.0],
    description: 'Establishment coordinates Long Lat',
    isArray: true,
  })
  @IsArray()
  readonly coordinates: number[];

  @ApiProperty({
    example: '+339000000',
    description: 'Establishment phone number',
  })
  @IsString()
  readonly phone: string;

  @ApiProperty({
    description: 'Establishment type',
    enum: EstablishmentType,
    example: EstablishmentType.restaurant,
  })
  @IsEnum(EstablishmentType)
  readonly type: EstablishmentType;
}
