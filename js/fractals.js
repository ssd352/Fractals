function draw() {
	let iterationTxtBox = document.getElementById("iter");
	let numberOfIterations = parseInt(iterationTxtBox.value);
	let canvas = document.getElementById("canvas");

	let triangleRadio = document.getElementById("triangle");
	let carpetRadio = document.getElementById("carpet");
	let kochRadio = document.getElementById("koch");
	let styles = getComputedStyle(document.documentElement);


	while (canvas.hasChildNodes()) {
		canvas.removeChild(canvas.lastChild);
	}
	canvas.setAttributeNS(null, "viewBox", "0 0 100 100");

	if (kochRadio.checked) {
		if (numberOfIterations > 8)
			return;

		var polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
		canvas.appendChild(polyline);
		//polyline.setAttributeNS(null, "stroke-width", "0");	
		let a = 46 * Math.sqrt(3);
		let y1 = Math.sqrt(3) / 6 * a + 5;
		let x1 = 5;
		let y2 = y1;
		let x2 = x1 + a;
		let x3 = (x1 + x2) / 2;
		let y3 = y1 + a * Math.sqrt(3) / 2;
		let points = koch(x1, y1, x2, y2, x3, y3, numberOfIterations);
		//let points = x1+","+y1+" "+x2+","+y2+" "+x3+","+y3+" ";
		polyline.setAttributeNS(null, "points", points);
		let color = styles.getPropertyValue('--snowflake_color');
		polyline.setAttributeNS(null, "fill", color);

	}



	if (triangleRadio.checked) {
		if (numberOfIterations > 10)
			return;
		let a = 100;
		let x1 = a / 2;
		let y1 = 0;
		let x2 = 0;
		let y2 = a * Math.sqrt(3) / 2;
		let x3 = a;
		let y3 = y2;
		var polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
		let points = x1 + "," + y1 + " " + x2 + "," + y2 + " " + x3 + "," + y3 + " ";
		polygon.setAttributeNS(null, "points", points);
		let color = styles.getPropertyValue('--triangle_color');
		// alert(color);
		polygon.setAttributeNS(null, "fill", color);
		canvas.appendChild(polygon);
		triangle(canvas, x1, y1, x2, y2, x3, y3, numberOfIterations);
	}
	if (carpetRadio.checked) {
		if (numberOfIterations > 6)
			return;
		let a = 100;
		let x1 = 0;
		let y1 = 0;
		let x2 = a;
		let y2 = a;
		var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		rect.setAttributeNS(null, "x", x1);
		rect.setAttributeNS(null, "y", y1);
		rect.setAttributeNS(null, "width", a);
		rect.setAttributeNS(null, "height", a);
		let color = styles.getPropertyValue('--carpet_color');
		// alert(color);
		rect.setAttributeNS(null, "fill", color);
		canvas.appendChild(rect);
		carpet(canvas, x1, y1, x2, y2, numberOfIterations);
	}
}
