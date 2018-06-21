var myConst = require('./constants.js');
var utils = require('./utils.js');
var converter = require('./converter.js');


process.stdin.setEncoding('utf8');
askAnotherOne();

process.stdin.on('readable', function() {
  var text = process.stdin.read(),
       // regexp roman number
      msg = ""; // the msg wich will be printed

  if (text !== null) {
    text = text.toUpperCase().trim();
    if (text == "Q") {
      // the user wants to quit
      process.exit();
    }
    if (myConst.isNumber.test(text)) {
      // it's a arabic number, let's convert this è_é
      msg = converter.displayToRoman(text, converter.convertToRoman(text));
    } else if (myConst.isRoman.test(text)) {
      // it's a roman number, let's convert this è_é
      if (!utils.checkNbOccur(text)) {
        msg = utils.getText('msg__too_many', [text]);
      }
       else if (utils.nbOccur(text, "M") > 3 || (utils.nbOccur(text, "M") == 3 && text.length > 3)) {
        // i accept only numbers between 0 and 3k
        msg = utils.getText('msg__only_from_to_to', ["0", "3000"]);
      } else {
        msg = converter.displayToArabic(text, converter.convertToArabic(text));
      }

    } else {
      msg = utils.getText('msg__plz_positive_or_roman', ["0", "3000"]);
    }
    process.stdout.write("\n" + msg + "\n");
    askAnotherOne();
  }
});



/**
 * Function to ask the user to enter something
 * @return {void}
 */
function askAnotherOne() {
  process.stdout.write("\n" + utils.getText("msg_ask_another_one"))
};

