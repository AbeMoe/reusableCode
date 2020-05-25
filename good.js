/**
 * @author Abe 
 * @name onlyAllow 
 * @returns A validator to check if a users role is included in an array
 * @description Creates a wrapper function which checks if any of the contained elements of a provided array are a member
 */
exports.onlyAllow = function(roles)
{
  return function(user) {return roles.includes(user.role);}
} 

/**
 * @author Abe 
 * @name dontAllow 
 * @returns A validator to check if a users role is included in an array. Returns false if it's a member
 * @description Creates a wrapper function which checks if any of the contained elements of a provided array are a member
 *
 */
exports.dontAllow = function(roles)
{
  return function(user) {return !roles.includes(user.role);}
} 

