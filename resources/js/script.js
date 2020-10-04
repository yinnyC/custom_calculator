// ******caesar_cipher**********************************************
const caesar_cipher = document.getElementById('Caesar');
const caesar_cipher_msg_input = document.getElementById('caesar-msg');
// When ever user change anything in the form, update result
caesar_cipher.onchange = function (e) {
	processResultCaesar();
};
//------ Decode/ Encode Messages -----------
function isUpperCase(str) {
	//check if the letter is uppercase
	return str === str.toUpperCase();
}
function isSpace(str) {
	//check if the letter is uppercase
	return str === ' ';
}
// Handle Encoding
function encodeByShift(str, key) {
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
let decodeByShift = (str, key) => {
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
//-------------------------------------------------------------------
function processResultCaesar() {
	let msg = caesar_cipher_msg_input.value;
	let action_input = document.getElementById('caesar-action');
	let shift_input = document.getElementById('caesar-shift');
	let output = document.getElementById('caesar-result');
	let result = '';
	if (action_input.value === 'encode') {
		result = encodeByShift(msg, parseInt(shift_input.value));
	} else if (action_input.value === 'decode') {
		result = decodeByShift(msg, parseInt(shift_input.value));
	}
	output.innerHTML = result;
}
processResultCaesar();
caesar_cipher_msg_input.addEventListener('input', processResultCaesar);
// ******Rot13 Cipher**********************************************
const rot13 = document.getElementById('Rot');
const rot13_msg_input = document.getElementById('rot-msg');
const submit_rot = document.getElementById('submit-rot');
function processResultRot() {
	let msg = rot13_msg_input.value;
	let action_input = document.getElementById('rot-action');
	let output = document.getElementById('rot-result');
	let result = '';
	if (action_input.value === 'encode') {
		result = encodeByShift(msg, 13);
	} else if (action_input.value === 'decode') {
		result = decodeByShift(msg, 13);
	}
	output.innerHTML = result;
}
processResultRot();
console.log(submit_rot);
submit_rot.addEventListener('click', processResultRot);
// ******Polybius Cipher*******************************************
