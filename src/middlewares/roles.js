/**
 * To verify the authorization 
 * If the user has required permission to perform the activity
 * @param {*} allowedRoles 
 * @returns 
 */
const roles = (allowedRoles) => {
    return (req, res, next) => {
      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ message: 'You do not have permission to access this resource' });
      }
      next();
    };
  };
  
export {roles}
  