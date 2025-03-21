import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreatePostDto {
  @ApiProperty({ description: "заголовок поста", example: "Новости" })
  @IsString()
  readonly title: string;

  @ApiProperty({ description: "контент поста", example: "Сводка дня: ..." })
  @IsString()
  readonly content: string;

  @ApiProperty({ description: "id пользвателя", example: 1 })
  @IsNumber()
  readonly userId: number;
}
