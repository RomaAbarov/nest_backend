import { ApiProperty } from "@nestjs/swagger";

export class Auth {
  @ApiProperty({ description: "токен", example: "dsfsdf43534fd" })
  token: string;
}
