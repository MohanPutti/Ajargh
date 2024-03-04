import jwt from 'jsonwebtoken';

/**
 * To verify the jwt token for authorization
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

const auth = (req, res, next) => {

    const authHeader = req.headers['authorization'];

    if (!authHeader) {
    return res.status(401).json({ message: 'Authorization token is required' });
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Authorization token is required' });
    }
    try {
        
        const decoded = jwt.verify(token, 'ajargh123$');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

export {auth}
