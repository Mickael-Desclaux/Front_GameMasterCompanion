export type PlayerSummary = {
    playerId: number;
    playerName: string;
    playerClass: string;
    playerRace: string;
    playerLevel: number;
    playerIcon: string;
    playerCurrentHP: number;
    playerMaxHP: number;
}

export type Character = {
    characterIcon: string,
    characterName: string,
    characterClass: CharacterClass,
    characterRace: string, //CharacterRace
    characterSpeed: number,
    characterLevel: number,
    characterCurrentHealth: number,
    characterMaxHealth: number,
    characterInitiative: number,
    characterArmor: number,
    characterInspirations: number,
    characterStats: CharacterStats,
    characterStatsProficiencies: Proficiency[],
    characterSkillsProficiencies: Skill[],
    characterDefenses: string[],
    characterVulnerabilities: string[],
    characterImmunities: string[],
    characterLanguages: string[],
}

export type CharacterStats = {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

export type Skill =
    'ACROBATICS'
    | 'ANIMAL_HANDLING'
    | 'ARCANA'
    | 'ATHLETICS'
    | 'DECEPTION'
    | 'HISTORY'
    | 'INSIGHTS'
    | 'INTIMIDATION'
    | 'INVESTIGATION'
    | 'MEDICINE'
    | 'NATURE'
    | 'PERCEPTION'
    | 'PERFORMANCE'
    | 'PERSUASION'
    | 'RELIGION'
    | 'SLEIGHT_OF_HAND'
    | 'STEALTH'
    | 'SURVIVAL'

export type Proficiency =
    | 'STRENGTH'
    | 'DEXTERITY'
    | 'CONSTITUTION'
    | 'WISDOM'
    | 'INTELLIGENCE'
    | 'CHARISMA';

export type CharacterClass =
    | 'Barbare'
    | 'Barde'
    | 'Clerc'
    | 'Druide'
    | 'Ensorceleur'
    | 'Guerrier'
    | 'Magicien'
    | 'Moine'
    | 'Occultiste'
    | 'Paladin'
    | 'Rôdeur'
    | 'Roublard'