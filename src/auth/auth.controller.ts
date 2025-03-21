import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { Auth } from "./entities/auth.entity";

@ApiTags("Авторизация")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: "Войти" })
  @ApiCreatedResponse({ type: Auth })
  @Post("login")
  login(@Body() dto: CreateUserDto) {
    return this.authService.login(dto);
  }

  @ApiOperation({ summary: "Зарегистрироваться" })
  @ApiCreatedResponse({ type: Auth })
  @Post("registration")
  registration(@Body() dto: CreateUserDto) {
    return this.authService.registration(dto);
  }
}
