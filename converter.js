var myConst = require('./constants.js');
var utils = require('./utils.js');

module.exports = {
	/**
	* Convert a numeric arabic in roman numeric
	* @Param {String} text : the text to convert ( has to be between 1 and 3000 )
	**/
	convertToRoman : function(text) {
		var result = "",
		l = text.length;
		if (parseInt(text) > 3000 || parseInt(text) < 1) {
			return "\n" + utils.getText('msg__only_from_to_to', ["0", "3000"]) + "\n";
		}
		if (text[3]) {
			result += this.convertRomanDigit(text[l-4], "M", "", "");
		}
		if (text[2]) {
			result += this.convertRomanDigit(text[l-3], "C", "D", "M");
		}
		if (text[1]) {
			result += this.convertRomanDigit(text[l-2], "X", "L", "C");
		}
		if (text[0]) {
			result += this.convertRomanDigit(text[l-1], "I", "V", "X");
		}
		return result;
	},

	displayToRoman : function(text, result) {
		return "\n" + utils.getText('msg__conversion_arabic', [text, result]) + "\n";
	},

	/**
	* Convert a numeric roman in arabic numeric
	* @Param {String} text : the text to convert ( has to be between 1 and 3000 )
	**/
	convertToArabic : function(text) {
		var pos = 0;
		var val = 0;
		var t1 = -1;
		var values = [1000,900,500,400,300,200,100,90,50,40,30,20,10,9,5,4,3,2,1];

		while ( pos < text.length ) {
			var t = utils.getNextPos(text, pos);
			if (t === false) {
				return "\n" + utils.getText('msg__invalid', [text]) + "\n";
			}
			if ( t1 != -1 ) {
				if ( values[t1] < values[t] ) {
					return "\n" + utils.getText('msg__invalid_should_not_follow', [myConst.romans[t], myConst.romans[t1]]) + ".\n";
				}
			}
			pos += myConst.romans[t].length;
			val += values[t];
			t1 = t;
		}
		return val;
	},

	displayToArabic : function(text, result) {
		return "\n" + utils.getText('msg__conversion_roman', [text, result]) + "\n";
	},


	/**
	*
	* Function to convert digit in roman char
	* @Param {String} digit : the digit to convert (could have been directly an INT i know)
	* @Param {String} char : the minus char (I ... X ... C ...)
	* @Param {String} char5 : the char for half the char max ( D...L...V...)
	* @Param {String} charMax : the max char of the digit ( M ... C ... X) - the max char of the dozen is the minus char of hundred etc...
	**/
	convertRomanDigit : function (digit, char, char5, charMax) {
		var res = "";
		var i = parseInt(digit);
		if (i == 4) {
			return char + char5;
		}
		if (i == 9) {
			return char + charMax;
		}
		if (i > 4) {
			res += char5;
			i -= 5;
		}
		for (i; i > 0; i--) {
			res += char;
		}
		return res;
	}
};