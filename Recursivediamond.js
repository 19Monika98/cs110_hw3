const spaces = function spaces(a) {
	    if (a === 0) {
	        return "";
	    }
	    return " " + spaces(a - 1);
	};



	const stars = function stars(a) {
	    if (a === 0) {
	        return "";
	    }
	    return '*' + stars(a - 1);
	};

	const boo = function boo(count, stcount, spcount) {
	    if (count === 0) {
	        return;
	    }
	    console.log(spaces(spcount) + stars(stcount));
	    boo(count - 1, stcount - 2, spcount + 1);
	};

	const foo = function foo(count, stcount, spcount, n) {
	    if (stcount >= n) {
	        foo(count, stcount, spcount);
	        return;
	    }

	    console.log(spaces(spcount) + stars(stcount));
	    foo(count - 1, stcount + 2, spcount - 1, n);

	};
	const diamond = function diamond(n) {
	    if (n % 2 === 0) {
	        n = n + 1;
	    }
	    foo(n, 1, n - 1, n);
	};

	diamond(6);
