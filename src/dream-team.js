const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  };
  name = '';
  members.sort();
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
    let clean = members[i].trim().toUpperCase();
        name += clean[0];
    }
  }
  return name.split('').sort().join('');
};
