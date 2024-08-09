const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword ="12345"
accountCity ="jaipur"

// accountId = 2 not allowed
accountEmail = "hwhvhvhj"
accountPassword = "55555550"
accountCity = "mumbai"
let accountState;
 /*
 Prefer not to use  var -
 because of issue in block scope and functional scope
  
 */

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

