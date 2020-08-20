//written by April Tsai, 08/19/2020

const sendBtn = document.querySelector('#sendBtn');
const messengeIn = document.querySelector('#messengeIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMessage);

function sendMessage(){
	let content = messengeIn.value;
	if (content === ''){
		alert("Please Enter Message")
	}else{
	messageOut.innerHTML = content;
	messengeIn.value = '';
}}