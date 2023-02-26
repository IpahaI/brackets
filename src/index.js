module.exports = function check(str, bracketsConfig) {
   let result = '';
  for(let i = 0; i < str.length; i++) {
    for(let k = 0; k < bracketsConfig.length; k++) {
      if(str[i] === bracketsConfig[k][0]) {
        if(bracketsConfig[k][0] === bracketsConfig[k][1]) {
          if(result[result.length - 1] === bracketsConfig[k][0]) {
            result = result.substring(0, result.length - 1)
          } else {
            result += str[i];
          }
        } else {
          result += str[i];
        }
      } else if(str[i] === bracketsConfig[k][1]) {
        if(result[result.length - 1] === bracketsConfig[k][0]) {
          result = result.substring(0, result.length - 1)
        } else {
          return false
        }
      }
    }
  } return result ? false : true
}
