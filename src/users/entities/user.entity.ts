import { ApiProperty } from "@nestjs/swagger";

export class User {
  @ApiProperty({ description: "id пользователя", example: 1 })
  id: number;

  @ApiProperty({ description: "почта пользователя", example: "user@mail.ru" })
  email: string;

  @ApiProperty({
    description: "хешированный пароль",
    example: "dfgdf234gdsfdfsdfsdf324",
  })
  password: string;

  @ApiProperty({ description: "забанен ли пользователь", example: "false" })
  isBanned: boolean;

  @ApiProperty({
    description: "причина бана",
    example: "плохое повеление",
    type: String,
    nullable: true,
  })
  banReason: string | null;
}

export class UserWithRoles extends User {
  @ApiProperty({
    description: "роли пользователя",
    example: [{ role: { value: "user" } }, { role: { value: "admin" } }],
  })
  roles: { role: { value: string } }[];
}
