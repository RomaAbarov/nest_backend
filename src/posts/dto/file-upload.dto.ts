import { ApiProperty } from "@nestjs/swagger";
import { Post } from "../entities/post.entity";

export class FileUploadDto extends Post {
  @ApiProperty({
    type: "string",
    format: "binary",
    description: "загрузите файл картинки",
    example: "image.jpg",
  })
  file: Express.Multer.File;
}
