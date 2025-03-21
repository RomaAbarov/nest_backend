import { ApiProperty } from "@nestjs/swagger";

export class Post {
  @ApiProperty({ description: "id поста", example: 10 })
  id: number;

  @ApiProperty({ description: "заголовок поста", example: "Новости" })
  title: string;

  @ApiProperty({ description: "контент поста", example: "Сводка дня: ..." })
  content: string;

  @ApiProperty({ description: "название картинки", example: "image.jpg" })
  image: string;

  @ApiProperty({ description: "id пользвателя", example: 1 })
  userId: number;
}
