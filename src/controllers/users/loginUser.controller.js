import mysql from "../../models/mysql.js";
import jwt from 'jsonwebtoken';

/**
 * function to login user
 * get user with username password
 * if available create userId and role hash with secret key and sign it with jwt to create token
 * @param {*} req 
 * @param {*} res 
 */
const loginUser = async(req,res) =>{
    try {
        
        const {userName,password} = req.body;

        const user = await mysql.getUser({userName,password});
        
        if(!user){
            res.status(400).json({ message: 'User with username/password doesn\'t exist' });
        }
        const userHash = {
          userId: user.dataValues.user_id,
          role: user.dataValues.role
        };
        
        const token = jwt.sign(userHash, 'ajargh123$',{expiresIn:'50000000'});

        res.json({ token });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}
export {loginUser}