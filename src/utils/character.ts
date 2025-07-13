import type {Proficiency} from "@/types/characters.ts";

export function addProficiencyBonus(characterLevel: number): number {
    if (characterLevel >= 5 && characterLevel <= 8) {
        return 3;
    } else if (characterLevel >= 9 && characterLevel <= 12) {
        return 4;
    } else if (characterLevel >= 13 && characterLevel <= 16) {
        return 5;
    } else if (characterLevel >= 17 && characterLevel <= 20) {
        return 6;
    }

    return 2;
}

export function checkProficiencyBonus(characterStatsProficiencies: Proficiency[], stat: Proficiency): boolean {
    return characterStatsProficiencies.includes(stat);
}

export function computeStatBonus(characterStat: number): number {
    if (characterStat >= 12 && characterStat <= 14) {
        return 1;
    } else if (characterStat >= 14 && characterStat <= 16) {
        return 2;
    } else if (characterStat >= 16 && characterStat <= 18) {
        return 3;
    } else if (characterStat >= 18 && characterStat <= 20) {
        return 4;
    }

    return 0;
}