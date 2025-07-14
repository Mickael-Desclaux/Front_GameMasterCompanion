import type {CharacterClass} from "@/types/characters.ts";

export type SpellResume = {
    id: number;
    name: string;
    level: number;
    castingTime: string;
    duration: string;
    classes: CharacterClass[];
    description: string;
}

export type Spell = SpellResume & {
    higherLevelDescription: string;
}