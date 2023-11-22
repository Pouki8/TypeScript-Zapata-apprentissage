import { Weapon } from "./weapon";
import { Hero } from "./hero";
import { HeroSpear } from "./heroSpear";


export class HeroSword extends Hero {
    constructor(name: string, power: number, life: number) {
        super(name, power, life);
        this.weapon = new Weapon("Sword");
    }

    attack(opponent: Hero): void {
        if (opponent instanceof HeroSpear) {
            opponent.Life -= this.Power * 2;
        } else {
            super.attack(opponent);
        }
    }
}