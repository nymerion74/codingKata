module.exports = {
	isNumber : new RegExp('^\\d+$'),
	isRoman : new RegExp('^[IVXCLDM]+$'),

	romans : ["M","CM","D","CD","CCC","CC","C","XC","L","XL","XXX","XX","X","IX","V","IV","III","II","I"],
	invalid : ["CMCM","CMD","CMCD","CMC","DCD","CDCD","CDC","XCXC","XCL","XCXL","XCX","LXL","XLXL","XLX","IXIX","IXV","IXIV","IXI","IVIV","IVI","VIV"]
}
