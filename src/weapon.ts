
// Création de ma classe Weapon que je peux importer dans un lautre fichier
export class Weapon {

    // avec les propriétés suivante 
    public name: string;
    public damage: number;
    static damage: number;
    // J'ai fait un constructeur avec mes propriétés 
    constructor(name: string, damage: number) {
        this.name = name;
        this.damage = damage;
    }
}

