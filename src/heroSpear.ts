import { Weapon } from "./weapon";
import { Hero } from "./hero";
import { HeroAxe } from "./heroAxe"

export class HeroSpear extends Hero {


    constructor(name: string, power: number, life: number) {
        super(name, power, life);
        this.weapon = new Weapon("Spear");
    }


    attack(opponent: Hero): void {
        if (opponent instanceof HeroAxe) {
            opponent.Life -= this.Power * 2;
        } else {
            super.attack(opponent);
        }
    }
}