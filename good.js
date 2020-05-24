/**
 * @author Abe 
 * @name hasRole 
 * @returns A validator to check if a users role is included in an array
 * @description Creates a wrapper function which checks if any of the contained elements of a provided array are a member
 */
exports.hasRole = function(roles,user)
{     
  return roles.includes(user.role);
} 