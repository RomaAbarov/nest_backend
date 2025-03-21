import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto {
  @ApiProperty({ description: "id пользователя", example: 1 })
  readonly userId: number;

  @ApiProperty({
    description: "причина бана пользователя",
    example: "плохое поведение",
    required: false,
  })
  readonly banReason: string;
}
