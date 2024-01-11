import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import AuthController from '@modules/auth/AuthController';
import AuthService from '@modules/auth/AuthService';
import JWTStrategy from '@modules/auth/JWTStrategy';
import LocalStrategy from '@modules/auth/LocalStrategy';
import UserModule from '@modules/users/UserModule';

@Module({
	imports: [
		UserModule,
		PassportModule,
		JwtModule.register({
			secret: 'jwtsecretkey',
			signOptions: {
				expiresIn: '1h',
			},
		}),
	],
	controllers: [AuthController],
	providers: [AuthService, LocalStrategy, JWTStrategy],
})
class AuthModule {}

export default AuthModule;
