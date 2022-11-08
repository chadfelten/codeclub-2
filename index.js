export default {
	fetch(request) {
	  if (request.method == 'POST') {
		  var obj = {"Request_Method"  : request.method}
		  var jsn = JSON.stringify(obj)
		  return new Response(jsn, {
		  headers: {
			"content-type": "application/json"
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