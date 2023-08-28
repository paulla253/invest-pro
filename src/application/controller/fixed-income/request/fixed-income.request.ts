import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsNumberString, IsString, Min } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export class FixedIncomeRequest {
  @IsNumber(
    { allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 },
    { message: i18nValidationMessage('validation.IS_NUMBER') },
  )
  @Min(0, { message: i18nValidationMessage('validation.MIN') })
  @ApiProperty({
    type: 'number',
    example: 100.5,
  })
  money: number;

  @IsNumber(
    { allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 },
    { message: i18nValidationMessage('validation.IS_NUMBER') },
  )
  @Min(0, { message: i18nValidationMessage('validation.MIN') })
  @ApiProperty({
    type: 'number',
    example: '12',
  })
  rate: number;

  @IsString({ message: i18nValidationMessage('validation.IS_STRING') })
  @IsNotEmpty({ message: i18nValidationMessage('validation.IS_NOT_EMPTY') })
  @ApiProperty({
    type: 'string',
    example: 'Pos Fixado 30 dias',
  })
  typeOfInvestment: string;

  @IsString({ message: i18nValidationMessage('validation.IS_STRING') })
  @IsNotEmpty({ message: i18nValidationMessage('validation.IS_NOT_EMPTY') })
  @ApiProperty({
    type: 'string',
    example: 'banco yxz',
  })
  broker: string;

  @IsString({ message: i18nValidationMessage('validation.IS_STRING') })
  @IsNotEmpty({ message: i18nValidationMessage('validation.IS_NOT_EMPTY') })
  @ApiProperty({
    type: 'string',
    example: 'banco yxz',
  })
  institution: string;

  @IsNumberString()
  @ApiProperty({
    type: 'string',
    example: '1692903850047',
  })
  startDate: number;

  @IsNumberString(null, { message: i18nValidationMessage('validation.IS_NUMBER_STRING') })
  @ApiProperty({
    type: 'string',
    example: '1692903850047',
  })
  minDate: Date;

  @IsNumberString()
  @ApiProperty({
    type: 'string',
    example: '1692903850047',
  })
  endDate: Date;
}
