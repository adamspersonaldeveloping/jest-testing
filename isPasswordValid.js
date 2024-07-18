//check a password for validity (minUpper:1, minLower:1, minNum:1, minLength:8, maxLength:32)

function isPasswordValid(pass) {
  const validationErrors = [];
  const passMap = {
    len: pass.length,
    upperCount: 0,
    lowerCount: 0,
    numCount: 0,
  };
  const upperCaseRegex = /^[A-Z]$/;
  const lowerCaseRegex = /^[a-z]$/;
  const numberRegex = /^[0-9]$/;
  for (const char of pass) {
    if (upperCaseRegex.test(char)) {
      passMap.upperCount++;
    } else if (lowerCaseRegex.test(char)) {
      passMap.lowerCount++;
    } else if (numberRegex.test(char)) {
      passMap.numCount++;
    }
  }
  if (
    passMap.len < 8 ||
    passMap.len > 32 ||
    passMap.upperCount < 1 ||
    passMap.lowerCount < 1 ||
    passMap.numCount < 1
  ) {
    return false;
  }
  return true;
}

module.exports = isPasswordValid;
