function koch(x1, y1, x2, y2, x3, y3, n){
	let initialNode = new Node(x1, y1);
	let lastNode = new Node(x1, y1);
	lastNode.next = null;
	let n2 = new Node(x2, y2);
	initialNode.next = n2;
	let n3 = new Node(x3, y3);
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
			let tmp1 = new Node((2 * p.x + next.x) / 3, (2 * p.y + next.y) / 3);
			let tmp2 = new Node(midx + perpx, midy + perpy);
			let tmp3 = new Node((p.x + 2 * next.x) / 3, (p.y + 2 * next.y) / 3);
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
//TODO
class Node{

	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.next = null;
	}
}


