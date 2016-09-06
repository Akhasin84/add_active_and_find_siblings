let yourItem = document.getElementsByClassName("your_class_name");

for (let i = 0; i < yourItem.length; i++ ) {
	yourItem[i].onclick=function(){
		this.classList.add("class_active");
		let siblings = this.parentNode.children
		for (let j = 0; j < siblings.length; j++){
			if(siblings[j].id != this.id){
				siblings[j].classList.remove("class_active");
			};
		};
	};
};