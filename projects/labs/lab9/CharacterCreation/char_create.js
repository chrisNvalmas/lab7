$(document).ready( function($) {
	$('img').click( function() {
		alert("hehe xD");
		$(this).focus();
		$('selectedAvatar').val($(this).attr('src'));
	});

	$('#charCreateForm').submit( function(formObj) {
		alert(formObj.name + formObj.avatar);
	});
});
