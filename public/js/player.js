
Player = function Player(conf) {
	"use strict";
	var avatar = select("#avatars .active img");
	this.pseudo = conf.pseudo || "random player";
	this.points = 0;
	this.cartes = [];
	this.avatar = avatar ?  avatar.src : "medias/images/avatars/n05.png";
};

Player.prototype.poserCartes = function poserCartes(modificateur) {
	
};

Player.prototype.tirerCarte = function tirerCarte(modificateur) {
	
};

