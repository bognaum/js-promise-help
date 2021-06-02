function separateKeySpans() {
	var version = "1.0.4";
	var coll = document.body.querySelectorAll("span.keys");
	coll.forEach((v,i,a) => {
		v.dataset.separate_key_spansVersion = version;
		var arr1 = v.textContent.split(/[,]\s/);
		v.textContent = "";
		arr1.forEach((vvv,iii,aaa) => {
			iii && (v.appendChild(document.createTextNode(", ")));
			var arr2 = vvv.split(/[+]/);
			arr2.forEach((vv,ii,aa) => {
				ii && (v.appendChild(document.createTextNode("+")));
				var span = v.appendChild(document.createElement("span"));
				span.textContent = vv;
				vv.toLowerCase() == "plus" && (span.textContent = "+");
				span.classList.add("single-key");
			});
		});
	})
}