export default {
	fetch(request) {
		const data = {
			"Request_Method"  : request.method,
		};
		
		const json = JSON.stringify(data, null, 2)

		if (request.method == 'POST') {
		  return new Response(json, {
		  headers: {
			"content-type": "application/json;charset=UTF-8",
		  }
		});
	  } else {
		return new Response("This is not a POST, it is a " + request.method + "...", {
		  headers: {
			"content-type": "text/plain"
		  }
		});
	  }
	}
  };