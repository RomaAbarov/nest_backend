import { Module } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";
import { PrismaService } from "src/prisma.service";
import { FilesModule } from "src/files/files.module";

@Module({
  imports: [FilesModule],
  controllers: [PostsController],
  providers: [PostsService, PrismaService],
})
export class PostsModule {}
