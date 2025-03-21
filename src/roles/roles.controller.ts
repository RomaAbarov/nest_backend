import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Role } from "./entities/role.entity";

@ApiTags("Роли")
@Controller("roles")
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @ApiOperation({ summary: "создать роль" })
  @ApiCreatedResponse({ type: Role })
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.rolesService.createRole(dto);
  }

  @ApiOperation({ summary: "получить id роли по значению" })
  @ApiParam({ name: "value", description: "значение роли", example: "admin" })
  @ApiResponse({ type: Role })
  @Get(":value")
  getRoleByValue(@Param("value") value: string) {
    return this.rolesService.getRoleByValue(value);
  }
}
