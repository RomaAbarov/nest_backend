import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PrismaService } from "src/prisma.service";
import { FilesService } from "src/files/files.service";

@Injectable()
export class PostsService {
  constructor(
    private prisma: PrismaService,
    private fileService: FilesService
  ) {}

  async createPost(dto: CreatePostDto, image: any) {
    const fileName = await this.fileService.createFile(image);

    return await this.prisma.post.create({
      data: { ...dto, image: fileName, user: { connect: { id: dto.userId } } },
    });
  }
}
