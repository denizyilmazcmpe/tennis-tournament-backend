import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtConstants = {
  secret: 'Deniz.123',
};

export const jwtConfig: JwtModuleOptions = {
  secret: jwtConstants.secret,
  signOptions: { expiresIn: '1h' },
};
