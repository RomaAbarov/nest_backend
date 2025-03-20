import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as fs from "fs/promises";
import * as path from "path";
import * as uuid from "uuid";

@Injectable()
export class FilesService {
  async createFile(file: Express.Multer.File) {
    try {
      const fileName = uuid.v4() + ".jpg";
      const filePath = path.resolve(__dirname, "..", "static");

      await fs.mkdir(filePath, { recursive: true });

      await fs.writeFile(path.join(filePath, fileName), file.buffer);

      return fileName;
    } catch (err) {
      throw new HttpException(
        "Произошла ошибка при записи файла",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
