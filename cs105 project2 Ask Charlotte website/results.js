// JavaScript Document

// The two functions below are designed to make it easy to look at the
// values returned by a form using method="get"
// Author:  Nicholas R. Howe
// Smith College, 13 April 2005

// Reports whether a particular key appears in the form results
// Unchecked buttons and radio boxes will not appear.
function keyExists(key) {
	var results = '&'+window.location.search+'&'  // bracket by &
	var key2 = '&'+escape(key.split(' ').join('+'))+'='
	return (results.indexOf(key2) > -1)
	// if key2 not found, indexOf() will return -1
}

// Returns the value associated with a particular key (if any)
function formValue(key) {
	var results = '&'+window.location.search.slice(1)+'&'  // bracket by &
	var key2 = '&'+escape(key.split(' ').join('+'))+'='
	var loc = results.indexOf(key2)
	// if key2 not found, indexOf() will return -1
	if (loc > -1) {
		loc = loc+key2.length  // value begins after key
		var value = results.substring(loc,results.indexOf('&',loc))
		return unescape(value.split('+').join(' '))
	} else {
		return null
	}
}
