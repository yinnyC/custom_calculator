// ******caesar_cipher**********************************************
const caesar_cipher = document.getElementById('Caesar');
const caesar_cipher_msg_input = document.getElementById('caesar-msg');
caesar_cipher.onchange = function (e) {
	processResult();
};
//
function isUpperCase(str) {
	//check if the letter is uppercase
	return str === str.toUpperCase();
}
function isSpace(str) {
	//check if the letter is uppercase
	return str === ' ';
}
// Handle Encoding
function ceaserCipherEncode(str, key) {
	let decipher = '';
	for (let i = 0; i < str.length; i++) {
		if (isSpace(str[i])) {
			decipher += ' ';
		} else {
			//if letter is uppercase then add uppercase letters
			if (isUpperCase(str[i])) {
				decipher += String.fromCharCode(
					((str.charCodeAt(i) + key - 65) % 26) + 65
				);
			} else {
				//else add lowercase letters
				decipher += String.fromCharCode(
					((str.charCodeAt(i) + key - 97) % 26) + 97
				);
			}
		}
	}
	return decipher;
}
// Handle Decoding
let ceaserCipherDecode = (str, key) => {
	let decipher = '';
	for (let i = 0; i < str.length; i++) {
		if (isSpace(str[i])) {
			decipher += ' ';
		} else {
			//if letter is uppercase then add uppercase letters
			if (isUpperCase(str[i])) {
				decipher += String.fromCharCode(
					((str.charCodeAt(i) - key - 91) % 26) + 91
				);
			} else {
				//else add lowercase letters
				decipher += String.fromCharCode(
					((str.charCodeAt(i) - key - 122) % 26) + 122
				);
			}
		}
	}
	return decipher;
};
function processResult() {
	let msg = caesar_cipher_msg_input.value;
	let action_input = document.getElementById('caesar-action');
	let shift_input = document.getElementById('caesar-shift');
	let output = document.getElementById('caesar-result');
	let result = '';
	if (action_input.value === 'encode') {
		result = ceaserCipherEncode(msg, parseInt(shift_input.value));
	} else if (action_input.value === 'decode') {
		result = ceaserCipherDecode(msg, parseInt(shift_input.value));
	}
	output.innerHTML = result;
}
processResult();
caesar_cipher_msg_input.addEventListener('input', processResult);
// ******Rot13 Cipher**********************************************
// ******Polybius Cipher*******************************************
