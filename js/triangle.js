function triangle(canvas, x1, y1, x2, y2, x3, y3, n) {
	if (n == 0)
		return;
	drawPolygon(canvas, x1, y1, x2, y2, x3, y3);
	triangle(canvas, x1, y1, (x1 + x2) / 2, (y1 + y2) / 2, (x1 + x3) / 2, (y1 + y3) / 2, n - 1);
	triangle(canvas, x2, y2, (x1 + x2) / 2, (y1 + y2) / 2, (x2 + x3) / 2, (y2 + y3) / 2, n - 1);
	triangle(canvas, x3, y3, (x3 + x2) / 2, (y3 + y2) / 2, (x1 + x3) / 2, (y1 + y3) / 2, n - 1);
}


function drawPolygon(canvas, x1, y1, x2, y2, x3, y3) {
	let color = window.getComputedStyle(document.body, null).backgroundColor;
	var polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
	let points = (x1 + x2) / 2 + "," + (y1 + y2) / 2 + " " + (x2 + x3) / 2 + "," + (y2 + y3) / 2 + " " + (x3 + x1) / 2 + "," + (y3 + y1) / 2 + " ";
	polygon.setAttributeNS(null, "points", points);
	polygon.setAttributeNS(null, "fill", color);
	canvas.appendChild(polygon);
}