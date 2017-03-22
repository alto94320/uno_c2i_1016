var instance, Plateau = function Plateau(conf) {
	instance = this;
	this.cartes = this.genererCartes();
	this.joueurs = [];
	this.observerActions();
	this.observerActions();
	this.cartes.toutes = instance.cartes.vertes.concat(instance.cartes.bleues).concat(instance.cartes.jaunes).concat(instance.cartes.rouges);
};

Plateau.prototype.genererCartes = function genererCartes() {
	return {
		vertes: this.creerSetCouleur("vertes"),
		bleues: this.creerSetCouleur("bleues"),
		jaunes: this.creerSetCouleur("jaunes"),
		rouges: this.creerSetCouleur("rouge")
	};
};

Plateau.prototype.creerSetCouleur = function creerSetCouleur(color) {
	var cartes = [], i;
	
	for (i = 0; i < 10; i += 1) {
		if (i === 0) {
			cartes.push(new Card({couleur: color, numero: i}));
		} else {
			cartes.push(new Card({couleur: color, numero: i}));
			cartes.push(new Card({couleur: color, numero: i}));
		}
	}
	cartes.push(new Card({
		couleur: color,
		numero: null,
		special: "+2",
	}));
	cartes.push(new Card({
		couleur: color,
		numero: null,
		special: "+2",
	}));
	cartes.push(new Card({
		couleur: color,
		numero: null,
		special: "Inversion",
	}));
	cartes.push(new Card({
		couleur: color,
		numero: null,
		special: "Inversion",
	}));
	cartes.push(new Card({
		couleur: color,
		numero: null,
		special: "Passe ton tour",
	}));
	cartes.push(new Card({
		couleur: color,
		numero: null,
		special: "Passe ton tour",
	}));
			
	return cartes;
};

Plateau.prototype.ajouterJoueur = function ajouterJoueur(e) {
	if (instance.joueurs.length <= 10) {
		instance.joueurs.push(
			new Player({
				pseudo: byId("nom_joueur").value
			})
		);
	}
	log(instance)
};

Plateau.prototype.observerActions = function observerActions() {
	byId("rejoindre").onclick = this.ajouterJoueur;
	byId("commencer").onclick = this.demarrerPartie;
};

Plateau.prototype.melangerCartes = function melangerCartes(cartes) {
	return shuffleArray(cartes);
};

Plateau.prototype.demarrerPartie = function demarrerPartie() {
	/*
	if (instance.joueurs.length < 2) {
		return window.alert("désolé, pas assez de joueurs dans le salon");
	}
	*/
	
	instance.distribuerCartes();
};

Plateau.prototype.distribuerCartes = function distribuerCartes() {
	
}
Plateau.prototype.distribuerCartes = function distribuerCartes() {
	var cartes = instance.cartes.toutes;
	
	instance.joueurs.forEach(function parcourir(joueur) {
		var rand;

		while (joueur.cartes.length < 7) {
			rand = Math.floor(Math.random() * (cartes.length + 1));
			joueur.cartes.push(instance.cartes.toutes[rand]);
		}
	});
	
	log(instance.joueurs);
	
};