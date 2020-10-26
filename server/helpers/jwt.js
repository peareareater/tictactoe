import expressJwt from 'express-jwt';
import config from '../config'

export default jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, algorithms: ['HS256'] }).unless({
        path: [
            '/user/login',
            '/user/register'
        ]
    });
}