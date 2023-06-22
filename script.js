//your JS code here. If required.
function updateElementTextWithPromise() {
	return new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("Hello, world!")
	}, 1000);
	});
}

const outputElement = document.getElementById("output");

updateElementTextWithPromise()
	.then((result)=>{
	outputElement.innerText=result;
	})
	.catch((error)=>{
		console.error(error);
	});