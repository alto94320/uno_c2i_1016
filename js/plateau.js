var instance, Plateau = function Plateau(conf) {
	instance = this;
	this.cards = this.genererCartes();
	this.players = [];
	this.observerActions();
	
	log(this);
};

Plateau.prototype.genererCartes = function genererCartes() {
	// 19/couleur(0 à 9 ... un zéro, deux de chaque autres, 76 en tout)
	return {
		vertes: this.creerSetCouleur("vertes"),
		bleues: this.creerSetCouleur("bleues"),
		jaunes: this.creerSetCouleur("jaunes"),
		rouges: this.creerSetCouleur("rouge")
	};
};

Plateau.prototype.creerSetCouleur = function creerSetCouleur(color) {
	var cards = [], i;
	
	for (i = 0; i < 10; i += 1) {
		if (i === 0) {
			cards.push(new Card({couleur: color, numero: i}));
		} else {
			cards.push(new Card({couleur: color, numero: i}));
			cards.push(new Card({couleur: color, numero: i}));
		}
	}
	cards.push(new Card({
		couleur: color,
		numero: null,
		special: "+2",
	}));
	cards.push(new Card({
		couleur: color,
		numero: null,
		special: "+2",
	}));
	cards.push(new Card({
		couleur: color,
		numero: null,
		special: "Inversion",
	}));
	cards.push(new Card({
		couleur: color,
		numero: null,
		special: "Inversion",
	}));
	cards.push(new Card({
		couleur: color,
		numero: null,
		special: "Passe ton tour",
	}));
	cards.push(new Card({
		couleur: color,
		numero: null,
		special: "Passe ton tour",
	}));
			
	return cards;
};

Plateau.prototype.ajouterJoueur = function ajouterJoueur(e) {
	if (instance.players.length <= 10) {
		instance.players.push(
			new Player({
				pseudo: byId("player_name").value
			})
		);
	}
	log(instance.players);
};

Plateau.prototype.observerActions = function observerActions() {
	log("ici");
	byId("add_player").onclick = this.ajouterJoueur;
};