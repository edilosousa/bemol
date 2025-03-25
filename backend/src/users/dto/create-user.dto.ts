import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
    cep: string;
  
    @IsNotEmpty()
    logradouro: string;
  
    @IsNotEmpty()
    bairro: string;
  
    @IsNotEmpty()
    cidade: string;
  
    @IsNotEmpty()
    estado: string;
}
