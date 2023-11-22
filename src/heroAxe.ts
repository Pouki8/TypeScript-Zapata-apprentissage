import { Weapon } from "./weapon";
import { Hero } from "./hero";
import { HeroSword } from "./heroSword"

export class HeroAxe extends Hero {
    constructor(name: string, power: number, life: number) {
        super(name, power, life);
        this.weapon = new Weapon("Axe");
    }

    attack(opponent: Hero): void {
        if (opponent instanceof HeroSword) {
            opponent.Life -= this.Power * 2;
        } else {
            super.attack(opponent);
        }
    }
}