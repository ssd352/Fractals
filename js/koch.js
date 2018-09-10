function koch(x1, y1, x2, y2, x3, y3, n){
	let initialNode = {x: x1, y: y1};
	let lastNode = {x: x1, y: y1, next: null};
	let n2 = {x: x2, y: y2};
	initialNode.next = n2;
	let n3 = {x: x3, y: y3};
	n2.next = n3;
	n3.next = lastNode;
	for (let cnt = 0; cnt < n; ++cnt){
		p = initialNode;
		while (p.next != null){
			next = p.next;
			vecx = (next.x - p.x) * Math.sqrt(3) / 6;
			vecy = (next.y - p.y) * Math.sqrt(3) / 6;
			perpx = vecy;
			perpy = -vecx;
			midx = (next.x + p.x) / 2;
			midy = (next.y + p.y) / 2;
			let tmp1 = {x: (2 * p.x + next.x) / 3, y: (2 * p.y + next.y) / 3};
			let tmp2 = {x: midx + perpx, y: midy + perpy};
			let tmp3 = {x: (p.x + 2 * next.x) / 3, y: (p.y + 2 * next.y) / 3};
			p.next = tmp1;
			tmp1.next = tmp2;
			tmp2.next = tmp3;
			tmp3.next = next;
			p = next;
		}
	}
	p = initialNode;
	outputString = "";
	while (p.next != null){
		outputString += p.x+","+p.y+" ";
		p = p.next;
	}
	return outputString;
}
