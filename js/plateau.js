Plateau = function Plateau(conf) {
	this.cards = this.genererCartes();
	console.log(this);
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
	var cards = [], i, limit = 10;
	
	for (i = 0; i < limit; i += 1) {
		if (i === 0) {
			cards.push(new Card({couleur: color, numero: i}));
		} else {
			cards.push(new Card({couleur: color, numero: i}));
			cards.push(new Card({couleur: color, numero: i}));
		}
	}
	return cards;
};