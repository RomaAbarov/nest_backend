import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { Express } from "express";
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { Post as PostEntity } from "./entities/post.entity";
import { FileUploadDto } from "./dto/file-upload.dto";

@ApiTags("Посты")
@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({ summary: "создать пост" })
  @ApiBody({ type: FileUploadDto })
  @ApiCreatedResponse({ type: PostEntity })
  @Post()
  @UseInterceptors(FileInterceptor("image"))
  create(
    @Body() dto: CreatePostDto,
    @UploadedFile() image: Express.Multer.File
  ) {
    return this.postsService.createPost(dto, image);
  }
}
