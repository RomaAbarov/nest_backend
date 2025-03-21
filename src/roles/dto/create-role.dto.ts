import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({ description: "роль пользователя", example: "admin" })
  readonly value: string;

  @ApiProperty({
    example: "полные права ко всем ресурсам",
    description: "описание роли",
  })
  readonly description: string;
}
