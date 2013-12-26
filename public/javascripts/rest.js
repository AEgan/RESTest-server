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
			success: doGet
		});
	});

	function doGet() {
		$.ajax({
			url: '/list',
			type: 'get',
			success: function(data) {
				var table = $('#messages');
				$("#messages > tbody").html("");
				var db = JSON.parse(data);
				var toAppend = "<tr>";
				db.forEach(function(item) {
					console.log(item.author);
					console.log(item.message);
					console.log("-----");
					toAppend += "<td>" + item.author + "</td>";
					toAppend += "<td>" + item.message + "</td>";
					toAppend += "</tr>";
				});
				table.append(toAppend);
			}
		});
	}

	doGet();



});