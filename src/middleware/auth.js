const User = require('../models/user');
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        //verify token
        const token = req.headers.authorization.replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //find logged-in user
        const user = await User.findOne({
            _id: decoded._id,
            'tokens.token': token,
        });

        //if not found, exit
        if (!user) {
            throw new Error();
        }

        req.user = user;
        req.token = token;
        next();
    } catch (e) {
        res.status(404).send({ error: 'Please authenticate.' });
    }
};

module.exports = auth;
