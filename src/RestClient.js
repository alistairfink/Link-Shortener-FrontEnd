import Config from "./Config.js"

class RestClient {
	GetLink(callback, id) {
		fetch(Config.ApiEndPointRoot + "/" + id)
		.then((response) => response.json())
		.then((responseJson) => {
			callback(responseJson);
		});
	}

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