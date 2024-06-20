class Utils {
    static calculateNumber(type, a, b) {
	const ax = Math.round(a);
	const bx = Math.round(b);
	let c = 0;
	switch (type) {
	case 'SUM':
            c = ax + bx;
            break;
	case 'SUBTRACT':
            c = ax - bx;
            break;
	case 'DIVIDE':
	    if (bx === 0) {
		c = "Error";
	    } else {
		c = ax / bx;
	    }
	    break;
	}
	return c;
    }
}

module.exports = Utils;
