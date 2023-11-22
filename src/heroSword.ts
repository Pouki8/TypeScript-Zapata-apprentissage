import { Weapon } from "./weapon";
import { Hero } from "./hero";
import { HeroSpear } from "./heroSpear";

export class HeroSword {
    constructor(name: string, power: number, life: number) {
        super(name, power, life);
        this.weapon = new Weapon("Spear");
    }

    attack(opponent: Hero): void {
        if (opponent instanceof HeroSword) {
            oppenent.life *= 2;
        }
    }
}