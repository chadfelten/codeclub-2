export default {
	fetch(request) {
		const response_libary = {
			1: "hello",
			2: "hola",
			3: "guten tag",
			4: "bonjour"
		};
		
		function getRandomInt(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min) + min);
		  }
		
		const random_int = getRandomInt(1, 5);

		return new Response(response_libary[random_int] + " worker!", {
		  headers: {
			"content-type": "application/json;charset=UTF-8",
		  }
		});
	}
}
