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

export type CharacterStats = {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

export type CharacterSkills = {
    acrobatics: number;
    animalHandling: number;
    arcana: number;
    athletics: number;
    deception: number;
    history: number;
    insights: number;
    intimidation: number;
    investigation: number;
    medicine: number;
    nature: number;
    perception: number;
    performance: number;
    persuasion: number;
    religion: number;
    sleightOfHand: number;
    stealth: number;
    survival: number;
}

export type Proficiency =
    | 'STRENGTH'
    | 'DEXTERITY'
    | 'CONSTITUTION'
    | 'WISDOM'
    | 'INTELLIGENCE'
    | 'CHARISMA';