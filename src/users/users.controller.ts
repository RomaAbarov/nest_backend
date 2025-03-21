import { Controller, Get, Post, Body, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Roles } from "src/auth/roles-auth.decorator";
import { RolesGuard } from "src/auth/roles.guard";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
import { User, UserWithRoles } from "./entities/user.entity";

@ApiTags("Пользователи")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: "создание пользователя" })
  @ApiCreatedResponse({ type: UserWithRoles })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @ApiOperation({
    summary: "получение всех пользователей",
    description: "только для роли admin",
  })
  @ApiBearerAuth()
  @ApiResponse({ type: [UserWithRoles] })
  @Roles("admin")
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({
    summary: "выдать роль",
    description: "только для роли admin",
  })
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: AddRoleDto })
  @Roles("admin")
  @UseGuards(RolesGuard)
  @Post("role")
  addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }

  @ApiOperation({
    summary: "забанить пользователя",
    description: "только для роли admin",
  })
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: User })
  @Roles("admin")
  @UseGuards(RolesGuard)
  @Post("ban")
  banUser(@Body() dto: BanUserDto) {
    return this.usersService.banUser(dto);
  }
}
