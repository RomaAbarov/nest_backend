import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
  @ApiProperty({ description: "роль пользователя", example: "user" })
  @IsString()
  readonly value: string;

  @ApiProperty({ description: "id пользователя", example: 1 })
  @IsNumber()
  readonly userId: number;
}
