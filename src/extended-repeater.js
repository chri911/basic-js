const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {

if( options.hasOwnProperty('separator')){
  if (options.hasOwnProperty('addition') ){
    if (options.hasOwnProperty('additionSeparator')) {
      return (String(str) + options.addition + (options.additionSeparator + options.addition).repeat(options.additionRepeatTimes - 1) + options.separator).repeat(options.repeatTimes - 1) + (String(str) + options.addition + (options.additionSeparator + options.addition).repeat(options.additionRepeatTimes - 1));
    } else {
      return (String(str) + options.addition + ("|" + options.addition).repeat(options.additionRepeatTimes - 1) + options.separator).repeat(options.repeatTimes - 1) + (String(str) + options.addition + ("|" + options.addition).repeat(options.additionRepeatTimes - 1));
    }
  }  else {
      return (str + options.separator).repeat(options.repeatTimes - 1) + str;
  }
} else{
  return (str + "+").repeat(options.repeatTimes - 1) + str;
};
};
  