var assert = require('assert');
var utils = require('../utils.js');
var converter = require('../converter.js');


//TEST UTILS
describe('utils nbOccur', function() {
	it('should return 2 when calculating nboccur of "l"  in "hello"', function() {
	  assert.equal(utils.nbOccur("hello", "l"), 2);
	});
	it('should return 4 when calculating nboccur of "0"  in "hello neo how are you ?"', function() {
	  assert.equal(utils.nbOccur("hello neo how are you ?", "o"), 4);
	});
});

describe('utils checkNbOccur', function() {
	it('should return false when calculating checkNbOccur of "VV"  ', function() {
	  assert.equal(utils.checkNbOccur("VV"), false);
	});
	it('should return true when calculating checkNbOccur of "VILC"', function() {
	  assert.equal(utils.checkNbOccur("VILC"), true);
	});
});

describe('utils getText', function() {
	it('should return "Enter an Arabic or Roman number please (Q and press enter to quit) : "', function() {
	  assert.equal(utils.getText("msg_ask_another_one"), "Enter an Arabic or Roman number please (Q and press enter to quit) : ");
	});
	it('should return "-- Your i18n key is not defined --" when giving a wrong I18N key', function() {
	  assert.equal(utils.getText("feufyzekufyhukfhy"), "-- Your i18n key is not defined --");
	});
});


// TEST CONVERTER
describe('converter convertToRoman', function() {
	it('should convert arabic to roman ', function() {
	  assert.equal(converter.convertToRoman("5"), "V");
	  assert.equal(converter.convertToRoman("10"), "X");
	  assert.equal(converter.convertToRoman("19"), "XIX");
	  assert.equal(converter.convertToRoman("48"), "XLVIII");
	  assert.equal(converter.convertToRoman("367"), "CCCLXVII");
	  assert.equal(converter.convertToRoman("2499"), "MMCDXCIX");
	});
	it('should convert roman to arabic ', function() {
	  assert.equal(converter.convertToArabic("V"), "5");
	  assert.equal(converter.convertToArabic("X"), "10");
	  assert.equal(converter.convertToArabic("XIX"), "19");
	  assert.equal(converter.convertToArabic("XLVIII"), "48");
	  assert.equal(converter.convertToArabic("CCCLXVII"), "367");
	  assert.equal(converter.convertToArabic("MMCDXCIX"), "2499");
	});
});