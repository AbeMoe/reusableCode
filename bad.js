/**
 * @author Abe 
 * @name isAdmin 
 * @returns Boolean
 * @description Checks to see if someone is an admin
 */
exports.isAdmin = function(user)
{     
  return user.role == 'admin'
} 
/**
 * @author Abe 
 * @name isWizard 
 * @returns Boolean
 * @description Checks to see if someone is a wizard
 */
exports.isWizard = function(user)
{     
  return user.role == 'wizard'
} 
/**
 * @author Abe 
 * @name isLizard 
 * @returns Boolean 
 * @description Checks to see if someone is a lizard
 */
exports.isLizard = function(user)
{     
  return user.role == 'lizard'
} 
