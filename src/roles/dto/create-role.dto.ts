import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  //@ApiProperty({ example: "user@mail.ru", description: "почтовый адрес" })
  readonly value: string;

  //@ApiProperty({ example: "123dfg12", description: "пароль" })
  readonly description: string;
}
