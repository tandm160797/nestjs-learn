import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
class JWTAuthGuard extends AuthGuard('jwt') {}

export default JWTAuthGuard;
