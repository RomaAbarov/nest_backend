import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { CreateRoleDto } from "./dto/create-role.dto";

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  async createRole(dto: CreateRoleDto) {
    return await this.prisma.role.create({ data: dto });
  }

  async getRoleByValue(value: string) {
    return await this.prisma.role.findUnique({ where: { value } });
  }
}
