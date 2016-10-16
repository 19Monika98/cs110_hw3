const reverse = function reverse(arr) {
	let reverselist = [];
	for (let i = arr.length - 1; i>=0; i--) {
		reverselist.push(arr[i]);
	};
	return reverselist;
};

const reverseArray = reverse([1,2,3,4,5,6,7]);
console.log(reverseArray);
