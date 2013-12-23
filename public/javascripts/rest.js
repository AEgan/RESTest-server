$(document).ready(function() {
	$("#submit").click(function(e) {
		e.preventDefault();
		var auth = $("#author").val();
		var rex = new RegExp(find, 'g');
		auth = auth.replace(rex, "%20");
		var msg = $("#message").val();
		msg = msg.replace(rex, "%20");
		$("#author").val("");
		$("#message").val("");
		var urlStr = "/put?author=" + auth + "&message=" + msg;
		$.ajax({
			url: urlStr,
			type: "put",
			success: function(data) {
			}
		});
	});
});

function newMsgFunction() {

}