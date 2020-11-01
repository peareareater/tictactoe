import db from '../db/index'
const User = db.User;
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken'
import config from '../config'

async function authenticate({ email, password }) {
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const token = jwt.sign({ sub: user.id }, config.secret, {
            expiresIn: "1d",
        });
        return {
            ...user.toJSON(),
            token,
        };
    }
}

async function create(userParam) {
    if (await User.findOne({ email: userParam.email })) {
        throw `Email ${userParam.email} is already taken`;
    }

    const user = new User(userParam);

    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    await user.save();
}

export default { authenticate, create }