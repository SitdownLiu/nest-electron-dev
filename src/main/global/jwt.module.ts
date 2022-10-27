import { JwtModule } from '@nestjs/jwt';

export const JwtTokenModule = JwtModule.register({
  secret: '42aa7705993174d117ea253e16820d69', //秘钥签名
  signOptions: {
    expiresIn: 24 * 60 * 60, //有效期, 单位: 秒
  },
});
