import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtConstants = {
  secret: 'Deniz.123',
};

export const jwtConfig: JwtModuleOptions = {
  secret: 'your-secret-key', // Replace with your actual secret key
  signOptions: { expiresIn: '1h' },
};
