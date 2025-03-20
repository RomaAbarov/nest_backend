import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma.service";
import { RolesService } from "src/roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private rolesService: RolesService
  ) {}

  async createUser(dto: CreateUserDto) {
    const role = await this.rolesService.getRoleByValue("user");

    if (!role) {
      throw new Error("Role 'user' not found");
    }

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: dto.password,
        roles: { create: { role: { connect: { id: role.id } } } },
      },
      include: { roles: { select: { role: { select: { value: true } } } } },
    });

    return user;
  }

  async getAllUsers() {
    return await this.prisma.user.findMany({
      include: { roles: { select: { role: { select: { value: true } } } } },
      orderBy: { id: "asc" },
    });
  }

  async getUserByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
      include: { roles: { select: { role: { select: { value: true } } } } },
    });
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: dto.userId },
    });
    const role = await this.rolesService.getRoleByValue(dto.value);

    if (user && role) {
      await this.prisma.user_Role.create({
        data: { user_id: user.id, role_id: role.id },
      });

      return dto;
    }

    throw new HttpException(
      "Пользователь или роль не найдены",
      HttpStatus.NOT_FOUND
    );
  }

  async banUser(dto: BanUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: dto.userId },
    });

    if (user) {
      const updateUser = await this.prisma.user.update({
        where: { id: user.id },
        data: { isBanned: true, banReason: dto.banReason },
      });

      return updateUser;
    }

    throw new HttpException("Пользователь не найден", HttpStatus.NOT_FOUND);
  }
}
