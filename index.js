export default {
	fetch(request) {
		if(request.url == "https://hello-world.cfelten.workers.dev") {
			return new Response('Hello worker!', {
				headers: {
					'content-type': 'text/plain',
				},
		
			});
		}		
		else{
			return new Response('Error Worker!', {
				headers: {
					'content-type': 'text/plain',
				}
			});
		}
	},
};
