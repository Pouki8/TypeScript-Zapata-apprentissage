// BOSS
// création de la class Hero 
class Hero {
    // avec les propriétés suivante (name qui est de type string, power de type number et life de type number)
    private name: string;
    private power: number;
    private life: number;
    // J'ai fait un constructeur avec mes propriétés 
    constructor(name: string, power: number, life: number) {
        this.name = name;
        this.power = power;
        this.life = life;
    }
    // Je crée la méthode attack()
    //The `attack` method has an `opponent` parameter (of type `Hero`).
    //La méthode `attack` a un paramètre `opponent` (de type `Hero`). 
    attack(opponent: Hero): void {
        // si la vie diminue d'autant de dégât de la puissance de l'attaque
        opponent.life -= this.power;
    }

    //La méthode isAlive devrait revenir true si les points de vie du héros sont supérieurs 
    // à zéro 
    // et false dans le cas contraire.
    isAlive(): boolean {
        return this.life > 0;

        //Si le Hero est vivant et que l'adversaire l'attaque dans la méthode attack(opponent: Hero) :
        if (this.life > 0) {
            return true;
        } else {
            return false;
        }
    }
    // Ainsi de suite jusqu'à ce que l'un des deux perde !!!
}


// Création de l'instance Joan et Leon
const Joan = new Hero("Joan", 20, 100);
const Leon = new Hero("Leon", 12, 100);
// Si Joan est vivant et que Leon l'attaque dans la méthode attack(opponent: Hero) :
console.log(Joan.isAlive());
