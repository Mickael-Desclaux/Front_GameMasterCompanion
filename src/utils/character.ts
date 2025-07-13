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

export function computeStatBonus(characterStat: number): string {
    if (characterStat === 0) {
        return "-5";
    } else if (characterStat >= 2 && characterStat <= 3) {
        return "-4";
    } else if (characterStat >= 4 && characterStat <= 5) {
        return "-3";
    } else if (characterStat >= 6 && characterStat <= 7) {
        return "-2";
    } else if (characterStat >= 8 && characterStat <= 9) {
        return "-1";
    } else if (characterStat >= 12 && characterStat <= 13) {
        return "+1";
    } else if (characterStat >= 14 && characterStat <= 15) {
        return "+2";
    } else if (characterStat >= 16 && characterStat <= 17) {
        return "+3";
    } else if (characterStat >= 18 && characterStat <= 19) {
        return "+4";
    } else if (characterStat === 20) {
        return "+5";
    }

    return "0";
}