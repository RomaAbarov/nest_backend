import { ApiProperty } from "@nestjs/swagger";

export class Role {
  @ApiProperty({ description: "id роли", example: 1 })
  id: number;

  @ApiProperty({
    description: "роль пользователя",
    example: "admin",
  })
  value: string;

  @ApiProperty({
    description: "описание роли",
    example: "полные права ко всем ресурсам",
  })
  description: string;
}
