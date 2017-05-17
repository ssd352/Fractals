function carpet(canvas, x1, y1, x2, y2, n){
	if (n == 0)
		return;
	drawRect(canvas, x1, y1, x2, y2);
	for (let i = 0; i < 3; ++i){
		for (let j = 0; j < 3; ++j){
			if (i == 1 && j == 1)
				continue;
			carpet(canvas, ((3 - i) * x1 + i * x2) / 3, ((3 - j) * y1 + j * y2) / 3, ((3 - i - 1) * x1 + (i + 1) * x2) / 3, ((3 - j - 1) * y1 + (j + 1) * y2) / 3, n - 1);
		}
	}
	//carpet(canvas, x1, y1, (x1 + x2) / 2, (y1 + y2) / 2, (x1 + x3) / 2, (y1 + y3) / 2, n - 1);
	//carpet(canvas, x2, y2, (x1 + x2) / 2, (y1 + y2) / 2, (x2 + x3) / 2, (y2 + y3) / 2, n - 1);
	//carpet(canvas, x3, y3, (x3 + x2) / 2, (y3 + y2) / 2, (x1 + x3) / 2, (y1 + y3) / 2, n - 1);
}


function drawRect(canvas, x1, y1, x2, y2){
	let color = document.body.style.backgroundColor;
	var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
	//let points = (x1 + x2) / 2+","+(y1 + y2) / 2+" "+(x2 + x3) / 2+","+(y2 + y3) / 2+" "+(x3 + x1) / 2+","+(y3 + y1) / 2+" ";
	rect.setAttributeNS(null, "x", ((3 - 1) * x1 + 1 * x2) / 3);
	rect.setAttributeNS(null, "y", ((3 - 1) * y1 + 1 * y2) / 3);
	rect.setAttributeNS(null, "width", (x2-x1)/3);
	rect.setAttributeNS(null, "height", (y2-y1)/3);
	rect.setAttributeNS(null, "fill", "white");
	canvas.appendChild(rect);
}
