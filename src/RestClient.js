import Config from "./Config.js"

class RestClient {

	CreateLink(callback, link) {
		fetch(Config.ApiEndPointRoot, {
			method: "POST",
			body: JSON.stringify({
				Link: link
			})
		})
		.then((response) => response.json())
		.then((responseJson) => {
			callback(responseJson);
		});
	}
}

export default RestClient;