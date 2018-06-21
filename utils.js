var myConst = require('./constants.js');
var i18n_en = require('./i18n_en.js');

module.exports = {

	/**
	* give the next position in the roman number to check, or error
	* @param  {[type]} text   the text to check
	* @param  {[type]} pos the index in text to check
	* @return {Mixed}     Integer next position to check, or false if an error occured
	*/
	getNextPos : function(text, pos) {

		for (i=0; i < myConst.invalid.length; i++) {
			if ( text.indexOf(myConst.invalid[i], pos) == pos ) {
				return false;
			}
		}
		for (i=0; i<myConst.romans.length; i++) {
			if ( text.indexOf(myConst.romans[i], pos) == pos ) {
				return i;
			}
		}
		return false;
	},

	/**
	* Count the number of LETTER in TEXT
	* @param  {String} text   the text to check
	* @param  {String} letter the letter to find
	* @return {Int}    the number of time LETTER has been found
	*/
	nbOccur : function(text, letter) {
		w2 = text.split(letter);
		nb = w2.length-1;
		return nb;
	},

	/**
	* check in the given roman number if a letter do not appear too much time
	* @param  {String} text the roman number
	* @return {Boolean}      True if correct, False if not
	*/
	checkNbOccur : function(text) {
		var self = this,
			result = true;

		["I", "X", "C", "M"].forEach(function(el) {
			if (self.nbOccur(text, el) > 3) {
				result = false;
			}
		});

		["V", "L", "D"].forEach(function(el) {
			if (self.nbOccur(text, el) > 1) {
				result = false;
			}
		});

		return result;
	},

	/**
	* get text from i18n files and replace varial {0}, {1} etc ...
	* @param  {String} key the key of text to display
	* @param  {Array} arg the arg to replace in {0}, {1} ...
	* @return {String} the correct text
	*/
	getText : function(key, args) {
		var msg = i18n_en["msg__key_not_defined"];
		if (i18n_en[key]) {
			msg = i18n_en[key];
			if (args && args.length) {
				args.forEach(function(val, index) {
					msg = msg.replace("{" + index + "}", val);
				});
			}
		}
		return msg;
	}

};