import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user@mail.ru", description: "почтовый адрес" })
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: "123dfg12", description: "пароль" })
  @IsString()
  @Length(4, 16)
  readonly password: string;
}
