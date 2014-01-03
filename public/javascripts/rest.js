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
			success: doGet(addClickFunction)
		});
	});

	function addClickFunction() {
		$('.msg').each(function(item, element) {
			$(element).click(function() {
				$.ajax({
					url: '/find?id='+$(element).attr('data'),
					type: 'get',
					dataType: 'json',
					success: function(data) {
						console.log(data);
					}
				});
			});
		});
		$('.destroybutton').each(function(item, element) {
			$(element).click(function() {
				$.ajax({
					url: '/destroy?id='+$(element).attr('data'),
					type: 'delete',
					success: function(data) {
						alert(data);
						doGet(addClickFunction);
					}
				});
			});
		});
	}

	function doGet(callback) {
		$.ajax({
			url: '/list',
			type: 'get',
			dataType: 'json',
			success: function(data) {
				var table = $('#messages');
				$("#messages > tbody").html("");
				var toAppend = "";
				data.forEach(function(item) {
					toAppend += "<tr class='msg' data='" + item._id + "'>";
					toAppend += "<td>" + item.author + "</td>";
					toAppend += "<td>" + item.message + "</td>";
					toAppend += "<td><button class='destroybutton' data='"+item._id+"'>X</td>"
					toAppend += "</tr>";
				});
				table.append(toAppend);
				callback();
			}
		});
	}

	doGet(addClickFunction);


	//addClickFunction();

});