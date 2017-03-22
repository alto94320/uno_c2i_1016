function UI() {
	this.avatars = selectAll("#avatars li");
	this.observer();
}

UI.prototype.activerAvatar = function activerAvatar() {
	log(this);
	var prev = select("#avatars .active");
	if (prev) prev.classList.remove("active");
	this.classList.toggle("active");
};

UI.prototype.observer = function observer() {
	var i;
	
	for (i = 0; i < this.avatars.length; i += 1) {
		this.avatars[i].onclick = this.activerAvatar;
	}
};