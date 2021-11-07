let message_place_x = 'l';
let message_place_y = 'b';

let maxMessageId = 0;

$('document').ready(function() {
	if ($('#message_place').length == 0) {$('body').append('<div id="message_place"></div>');}
	$('#message_place').css('position', 'absolute');
	$('#message_place').css('bottom', '0.5em');
	$('#message_place').css('left', '0.5em');

	/*$('.x').click(function() {
  		alert('');
	});*/
});



function message_place_setting(x, y, xVal, yVal) {
	if (x == 'l') {
		$('#message_place').css('left', xVal);
		$('#message_place').css('right', 'auto');
		message_place_x = 'l';
	}
	else {
		$('#message_place').css('left', 'auto');
		$('#message_place').css('right', xVal);
		message_place_x = 'r';
	}

	if (y == 't') {
		$('#message_place').css('top', yVal);
		$('#message_place').css('bottom', 'auto');
		message_place_y = 't';
	}
	else {
		$('#message_place').css('top', 'auto');
		$('#message_place').css('bottom', yVal);
		message_place_y = 'b';
	}
}


class Message {
	xNeed = true;
	autoClose = true;
	delay = 70000;


	constructor(dict, settingIsOver=true) {
		this.text = dict['text'];
		this.type = dict['type'];
		maxMessageId++;
		this.id = maxMessageId;

		if (settingIsOver) {this.add(this.id);}
	}

	add(id) {
		let x = '';
		let data = '';
		if (this.xNeed) {x = '<div class="x">x</div>';}
		if (message_place_x == 'l') {data = '<div class="Message" lr="'+message_place_x+'" msgType="'+this.type+'" id="message'+this.id+'">'+this.text+x+'</div>';}
		else {data = '<div class="Message" lr="'+message_place_x+'" msgType="'+this.type+'" id="message'+this.id+'">'+x+this.text+'</div>';}
		if (message_place_y == 'b') {$('#message_place').append(data);}
		else {$('#message_place').prepend(data);}
		if (this.autoClose == true) {
			let msgDelTimer = setTimeout("msgId = '#message' + "+ id + "; $(msgId).remove();", this.delay);
		}
	}
}

function dellMsg(id) {
	msgId = '#message' + id;
	$(msgId).remove();
}