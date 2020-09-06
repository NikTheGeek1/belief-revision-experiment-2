
////////////////////////////////////////////////////////////
// This function helps drawing a directed graph with x nodes 
// /////////////////////////////////////////////////////////

var generate_network = function (canvas_no, x, y, node, line, vsSign, body, leg1, leg2, arm1, arm2, arrow, direction, inputType, neighbour) {
	// GENERAL settings - allows for drawing of a node with a directed edge at a position of 
	// interest. Limitation is currently the angle and relative position of the edge (variables for this will
	// be addes soon for more flexible drawing)
	var canvas=document.getElementById(canvas_no);
	var context=canvas.getContext("2d");
	var candidate_color = "#000000"

	if (canvas_no == 'network_graph1' || canvas_no == 'network_graph3') {
		if (direction == 1) {
			candidate_color = '#FF8C00';
		} else if (direction == -1) {
			candidate_color = '#800080';
		};
	};

	if (x == 675) {
		context.clearRect(0, 0, canvas.width, canvas.height);
	};

	var line = canvas.getContext('2d')
	line.strokeStyle="#FFFFFF";
	line.lineWidth = 7;
	line.beginPath();
	line.setLineDash([0]);
	line.moveTo(x + 20 * direction ,y + 80);
	line.lineTo(x + direction * 190, y + 190);
	line.closePath();
	line.stroke();

	if (inputType != 1) {
		var vsSign = canvas.getContext('2d');
		vsSign.strokeStyle="#FFFFFF";
		vsSign.beginPath();
		vsSign.setLineDash([0]);
		vsSign.arc(275 , 100, 30, 0, 2 * Math.PI);
		vsSign.font = "25px Comic Sans MS";
		vsSign.fillStyle = 'black';
		vsSign.textAlign = "center";
		if (canvas_no == 'network_graph1' || canvas_no == 'network_graph3') {
			vsSign.fillText('vs.', 400, 100);
		};
		vsSign.closePath();
		vsSign.stroke();
	};

	var node = canvas.getContext('2d');
	node.strokeStyle= candidate_color;
	node.beginPath();
	node.setLineDash([0]);
	node.arc(x - direction * 35, y - 35, 35, 0, 2 * Math.PI);
	node.font = "14px Comic Sans MS";
	node.fillStyle = "black";
	node.textAlign = "center";
	node.fillText(neighbour, x - direction * 35, y - 35);
	node.closePath();
	node.stroke();

	var body = canvas.getContext('2d')
	body.strokeStyle= candidate_color;
	body.lineWidth = 7;
	body.beginPath();
	body.setLineDash([0]);
	body.moveTo(x - direction * 35, y + 5);
	line.lineTo(x - direction * 35, y + 40);
	line.closePath();
	line.stroke();

	var leg1 = canvas.getContext('2d')
	leg1.strokeStyle= candidate_color;
	leg1.lineWidth = 7;
	leg1.beginPath();
	leg1.setLineDash([0]);
	leg1.moveTo(x - direction * 35, y + 40);
	leg1.lineTo(x + direction * 5, y + 60);
	leg1.closePath();
	leg1.stroke();

	var leg2 = canvas.getContext('2d')
	leg2.strokeStyle= candidate_color;
	leg2.lineWidth = 7;
	leg2.beginPath();
	leg2.setLineDash([0]);
	leg2.moveTo(x - direction * 35, y + 40);
	leg2.lineTo(x - direction * 75, y + 60);
	leg2.closePath();
	leg2.stroke();

	var arm1 = canvas.getContext('2d')
	arm1.strokeStyle= candidate_color;
	arm1.lineWidth = 7;
	arm1.beginPath();
	arm1.setLineDash([0]);
	arm1.moveTo(x - direction * 35, y + 20);
	arm1.lineTo(x + direction * 5, y + 12.5);
	arm1.closePath();
	arm1.stroke();

	var arm2 = canvas.getContext('2d')
	arm2.strokeStyle= candidate_color;
	arm2.lineWidth = 7;
	arm2.beginPath();
	arm2.setLineDash([0]);
	arm2.moveTo(x - direction * 35, y + 20);
	arm2.lineTo(x - direction * 75, y + 12.5);
	arm2.closePath();
	arm2.stroke();

	// 1) only drawing connections between nodes if network is used to show opinions of other people
	if (canvas_no == 'network_graph2' || canvas_no == 'network_graph4') {
		var line = canvas.getContext('2d')
		line.strokeStyle="#000000";
		line.lineWidth = 7;
		line.beginPath();
		line.setLineDash([0]);
		line.moveTo(x + 20 * direction ,y );
		line.lineTo(x + direction * 190, y + 0);
		line.closePath();
		line.stroke();

		var arrow = canvas.getContext('2d');
		arrow.strokeStyle="#000000";
		arrow.beginPath();
		arrow.setLineDash([0]);
		arrow.moveTo(x + direction * 190, y + 10);
		arrow.lineTo(x + direction * 190, y + 10);
		arrow.lineTo(x + direction * 190 , y + -10);
		arrow.lineTo(x + direction * 210, y + 0);
		arrow.fillStyle="#000000";
		arrow.fill();
		arrow.closePath();
		arrow.stroke();
 
		var recipient = canvas.getContext('2d');
		recipient.beginPath();
		recipient.setLineDash([0]);
		recipient.arc(x + direction * 275 , y + 0, 50, 0, 2 * Math.PI);
		recipient.font = "20px Comic Sans MS";
		recipient.fillStyle = "black";
		recipient.textAlign = "center";
		recipient.fillText("You", x + direction * 275 , y + 5);
		recipient.closePath();
		recipient.stroke(); 

		// 2) optional edge between source nodes that will appear in the dependent condition
		if (inputType == "#con_3" && neighbour == 'Tom') {
			var depLine = canvas.getContext('2d')
			depLine.strokeStyle="#000000";
			depLine.lineWidth = 7;
			depLine.beginPath();
			depLine.setLineDash([8, 10]);
			depLine.moveTo(x - 160 ,y + 10);
			depLine.lineTo(x + direction * 320, y + 10);
			depLine.closePath();
			depLine.stroke();

			var depArrow = canvas.getContext('2d');
			depArrow.strokeStyle="#000000";
			depArrow.beginPath();
			depArrow.setLineDash([0]);
			depArrow.moveTo(x + direction * 285, y + 10);
			depArrow.lineTo(x + direction * 285, y - 25);
			depArrow.lineTo(x + direction * 325 , y + 10);
			depArrow.lineTo(x + direction * 285, y + 40);
			depArrow.fillStyle="#000000";
			depArrow.fill();
			depArrow.closePath();
			depArrow.stroke();
		};
	};
};

// function displaying success (green circle)
var show_success = function(canvas_no, x, y) {
	
	var shift = 1;
	if (x == 125) {
		shift = -1;
	};
	var canvas=document.getElementById(canvas_no);
	var successSign=canvas.getContext("2d");
	var image = document.getElementById("winner.png");	
	successSign.drawImage(image, x + 35 * shift, 145);

	// successSign.strokeStyle="#000000";
	// successSign.beginPath(); 
	// successSign.setLineDash([0]);
	// successSign.arc(x + 35 * shift, 155, 15, 0, 2 * Math.PI);
	// successSign.font = "60px Comic Sans MS";
	// successSign.fillStyle = "green";
	// successSign.textAlign = "center";
	// successSign.closePath();
	// successSign.fill();
};

// function removing green success circle
var clear_success = function(canvas_no, x, y) {
	var canvas=document.getElementById(canvas_no);
	var successSign=canvas.getContext("2d");	
	successSign.clearRect(0, 310, canvas.width, canvas.height);
};




var generate_network_single_neighbour = function (canvas_no, x, y, node, line, vsSign, body, leg1, leg2, arm1, arm2, arrow, direction, inputType, neighbour) {
	// GENERAL settings - allows for drawing of a node with a directed edge at a position of 
	// interest. Limitation is currently the angle and relative position of the edge (variables for this will
	// be addes soon for more flexible drawing)
	var canvas=document.getElementById(canvas_no);
	var context=canvas.getContext("2d");
	var candidate_color = "#000000"

	if (canvas_no == 'network_graph1' || canvas_no == 'network_graph3') {
		if (direction == 1) {
			candidate_color = '#FF8C00';
		} else if (direction == -1) {
			candidate_color = '#800080';
		};
	};

	if (x == 675) {
		context.clearRect(0, 0, canvas.width, canvas.height);
	};

	var line = canvas.getContext('2d')
	line.strokeStyle="#FFFFFF";
	line.lineWidth = 7;
	line.beginPath();
	line.setLineDash([0]);
	line.moveTo(x + 20 * direction ,y + 80);
	line.lineTo(x + direction * 190, y + 190);
	line.closePath();
	line.stroke();

	if (inputType != 1) {
		var vsSign = canvas.getContext('2d');
		vsSign.strokeStyle="#FFFFFF";
		vsSign.beginPath();
		vsSign.setLineDash([0]);
		vsSign.arc(275 , 100, 30, 0, 2 * Math.PI);
		vsSign.font = "25px Comic Sans MS";
		vsSign.fillStyle = 'black';
		vsSign.textAlign = "center";
		if (canvas_no == 'network_graph1' || canvas_no == 'network_graph3') {
			vsSign.fillText('vs.', 400, 100);
		};
		vsSign.closePath();
		vsSign.stroke();
	};

	var node = canvas.getContext('2d');
	node.strokeStyle= candidate_color;
	node.beginPath();
	node.setLineDash([0]);
	node.arc(x - direction * 35, y - 35, 35, 0, 2 * Math.PI);
	node.font = "14px Comic Sans MS";
	node.fillStyle = "black";
	node.textAlign = "center";
	node.fillText(neighbour, x - direction * 35, y - 35);
	node.closePath();
	node.stroke();

	var body = canvas.getContext('2d')
	body.strokeStyle= candidate_color;
	body.lineWidth = 7;
	body.beginPath();
	body.setLineDash([0]);
	body.moveTo(x - direction * 35, y + 5);
	line.lineTo(x - direction * 35, y + 40);
	line.closePath();
	line.stroke();

	var leg1 = canvas.getContext('2d')
	leg1.strokeStyle= candidate_color;
	leg1.lineWidth = 7;
	leg1.beginPath();
	leg1.setLineDash([0]);
	leg1.moveTo(x - direction * 35, y + 40);
	leg1.lineTo(x + direction * 5, y + 60);
	leg1.closePath();
	leg1.stroke();

	var leg2 = canvas.getContext('2d')
	leg2.strokeStyle= candidate_color;
	leg2.lineWidth = 7;
	leg2.beginPath();
	leg2.setLineDash([0]);
	leg2.moveTo(x - direction * 35, y + 40);
	leg2.lineTo(x - direction * 75, y + 60);
	leg2.closePath();
	leg2.stroke();

	var arm1 = canvas.getContext('2d')
	arm1.strokeStyle= candidate_color;
	arm1.lineWidth = 7;
	arm1.beginPath();
	arm1.setLineDash([0]);
	arm1.moveTo(x - direction * 35, y + 20);
	arm1.lineTo(x + direction * 5, y + 12.5);
	arm1.closePath();
	arm1.stroke();

	var arm2 = canvas.getContext('2d')
	arm2.strokeStyle= candidate_color;
	arm2.lineWidth = 7;
	arm2.beginPath();
	arm2.setLineDash([0]);
	arm2.moveTo(x - direction * 35, y + 20);
	arm2.lineTo(x - direction * 75, y + 12.5);
	arm2.closePath();
	arm2.stroke();
};

// function displaying success (green circle)
var show_success = function(canvas_no, x, y) {
	
	var shift = 1;
	if (x == 125) {
		shift = -1;
	};
	var canvas=document.getElementById(canvas_no);
	var successSign=canvas.getContext("2d");
	var image = document.getElementById("winner.png");	
	successSign.drawImage(image, x + 35 * shift, 145);

	// successSign.strokeStyle="#000000";
	// successSign.beginPath(); 
	// successSign.setLineDash([0]);
	// successSign.arc(x + 35 * shift, 155, 15, 0, 2 * Math.PI);
	// successSign.font = "60px Comic Sans MS";
	// successSign.fillStyle = "green";
	// successSign.textAlign = "center";
	// successSign.closePath();
	// successSign.fill();
};

// function removing green success circle
var clear_success = function(canvas_no, x, y) {
	var canvas=document.getElementById(canvas_no);
	var successSign=canvas.getContext("2d");	
	successSign.clearRect(0, 310, canvas.width, canvas.height);
};