import { Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithoutRequest] | [opt: import("passport-jwt").StrategyOptionsWithRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private authService;
    private usersService;
    constructor(authService: AuthService, usersService: UsersService);
    validate(payload: any): Promise<{
        userId: any;
        email: any;
    }>;
}
export {};
