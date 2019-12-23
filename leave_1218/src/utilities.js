


//var isApp;
//window.location.href.indexOf("isapp") != -1 ?  (isApp = true) : (isApp = false);

function dateGetter(name, size, offset, trim) {
	offset = offset || 0;
	return function(date) {
		var value = date['get' + name]();
		if (offset > 0 || value > -offset)
			value += offset;
		if (value === 0 && offset == -12) value = 12;
		return padNumber(value, size, trim);
	};
};

function padNumber(num, digits, trim) {
	var neg = '';
	if (num < 0) {
		neg = '-';
		num = -num;
	}
	num = '' + num;
	while (num.length < digits) num = '0' + num;
	if (trim)
		num = num.substr(num.length - digits);
	return neg + num;
};

function dateStrGetter(name, shortForm) {
	return function(date, formats) {
		var value = date['get' + name]();
		var get = (shortForm ? ('SHORT' + name) : name).toUpperCase();

		return formats[get][value];
	};
};

var DATE_FORMATS = {
	yyyy: dateGetter('FullYear', 4),
	yy: dateGetter('FullYear', 2, 0, true),
	y: dateGetter('FullYear', 1),
	MMMM: dateStrGetter('Month'),
	MMM: dateStrGetter('Month', true),
	MM: dateGetter('Month', 2, 1),
	M: dateGetter('Month', 1, 1),
	dd: dateGetter('Date', 2),
	d: dateGetter('Date', 1),
	HH: dateGetter('Hours', 2),
	H: dateGetter('Hours', 1),
	hh: dateGetter('Hours', 2, -12),
	h: dateGetter('Hours', 1, -12),
	mm: dateGetter('Minutes', 2),
	m: dateGetter('Minutes', 1),
	ss: dateGetter('Seconds', 2),
	s: dateGetter('Seconds', 1),
}
var Utilities = {
	getTime: function(date, format) {
		var text = '',
			parts = [],
			fn, match;
		while (format) {
			match = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/.exec(format);
			if (match) {
				parts = parts.concat([].slice.call(match, 1));
				format = parts.pop();
			} else {
				parts.push(format);
				format = null;
			}
		}
		parts.forEach(function(value) {
			fn = DATE_FORMATS[value];
			text += fn ? fn(new Date(date)) : value.replace(/(^'|'$)/g, '').replace(/''/g, "'");
		});
		return text;
	},
	// 获取文件后缀
	getFileExt: function(name) {
		var name = name.split('!')[0] || '',
			ext = '',
			arr = name.split('.');

		ext = arr[arr.length - 1];

		return ext.toLowerCase();
	},
	//解析URL参数
	urlParse() {
		let href = window.location.href;
		let url = href.substring(href.lastIndexOf('?'));
		let obj = {};
		let reg = /[?&][^?&]+=[^?&]+/g;
		let arr = url.match(reg);
		// ['?id=12345', '&a=b']
		if (arr) {
		  arr.forEach((item) => {
			let tempArr = item.substring(1).split('=');
			let key = decodeURIComponent(tempArr[0]);
			let val = decodeURIComponent(tempArr[1]);
			val.includes('#') && (val = val.substring(0, val.indexOf('#'))); //避免id=407#?这样的错误数据
			obj[key] = val;
		  });
		}
		return obj;
	}, 
}
export default Utilities
