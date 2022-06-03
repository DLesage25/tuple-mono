import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            secretOrKeyProvider: passportJwtSecret({
                cache: true,
                rateLimit: true,
                jwksUri: `${process.env.TUPLE_API_AUTH0_ISSUER_URL}.well-known/jwks.json`,
            }),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            audience: process.env.TUPLE_API_AUTH0_AUDIENCE,
            issuer: `${process.env.TUPLE_API_AUTH0_ISSUER_URL}`,
            algorithms: ['RS256'],
        });
    }

    validate(payload: unknown): unknown {
        return payload;
    }
}
