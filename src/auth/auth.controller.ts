import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "src/users/dto/create-user.dto";

@ApiTags("Авторизация")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  login(@Body() dto: CreateUserDto) {
    return this.authService.login(dto);
  }

  @Post("registration")
  registration(@Body() dto: CreateUserDto) {
    return this.authService.registration(dto);
  }
}
