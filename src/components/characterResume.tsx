export default function CharacterResume() {

    const character = {
        characterIcon: "https://docs.material-tailwind.com/img/face-3.jpg",
        characterName: "Guy",
        characterClass: "Mage",
        characterRace: "Haut-Elfe",
        characterLevel: 4,
        characterCurrentHealth: 14,
        characterMaxHealth: 20,
        characterInitiative: 2,
        characterArmor: 12,
        characterInspirations: 1,
        characterStats: {
            strength: 12,
            dexterity: 11,
            constitution: 10,
            intelligence: 14,
            wisdom: 15,
            charisma: 18,
        },
        characterStatsProficiencies: ["intelligence", "wisdom"],
        characterDefenses: ["feu", "glace"],
        characterVulnerabilities: ["électrique", "contondant"],
        characterImmunities: ["perçant", "tranchant"],
        characterLanguages: ["commun", "elfe", "nain"],
    }

    // TODO: ADD STATS BONUS (+1 FOR 12, +2 FOR 14, ETC...)

    function addProficiencyBonus(): number {
        if (character.characterLevel >= 5 && character.characterLevel <= 8) {
            return 3;
        } else if (character.characterLevel >= 9 && character.characterLevel <= 12) {
            return 4;
        } else if (character.characterLevel >= 13 && character.characterLevel <= 16) {
            return 5;
        } else if (character.characterLevel >= 17 && character.characterLevel <= 20) {
            return 6;
        }

        return 2;
    }

    function checkProficiencyBonus(stat: string): boolean {
        return character.characterStatsProficiencies.includes(stat);
    }

    return (
        <>
            <img src={character.characterIcon} alt={character.characterName} />
            <div>{character.characterName}</div>
            <div>{character.characterClass} {character.characterRace}</div>
            <div>Niveau {character.characterLevel}</div>
            <div>{character.characterInitiative}</div>
            <div>{character.characterArmor}</div>
            <div>{character.characterInspirations}</div>
            <div>{character.characterDefenses.map((defense: string, index: number) => (
                <div key={index}>
                    <div>{defense}</div>
                </div>
            ))}</div>
            <div>
                {character.characterVulnerabilities.map((vulnerability: string, index: number) => (
                    <div key={index}>
                        <div>{vulnerability}</div>
                    </div>
                ))}
            </div>
            <div>
                {character.characterImmunities.map((immunity: string, index: number) => (
                    <div key={index}>
                        <div>{immunity}</div>
                    </div>
                ))}
            </div>
            <div>
                {character.characterLanguages.map((language: string, index: number) => (
                    <div key={index}>
                        <div>{language}</div>
                    </div>
                ))}
            </div>

            <div>{character.characterCurrentHealth} / {character.characterMaxHealth} PV</div>

            <div>
                <ul>
                    <li>
                        {checkProficiencyBonus("strength") ? character.characterStats.strength + addProficiencyBonus() : character.characterStats.strength}
                    </li>
                    <li>
                        {checkProficiencyBonus("dexterity") ? character.characterStats.dexterity + addProficiencyBonus() : character.characterStats.dexterity}
                    </li>
                    <li>
                        {checkProficiencyBonus("constitution") ? character.characterStats.constitution + addProficiencyBonus() : character.characterStats.constitution}
                    </li>
                    <li>
                        {checkProficiencyBonus("intelligence") ? character.characterStats.intelligence + addProficiencyBonus() : character.characterStats.intelligence}
                    </li>
                    <li>
                        {checkProficiencyBonus("wisdom") ? character.characterStats.wisdom + addProficiencyBonus() : character.characterStats.wisdom}
                    </li>
                    <li>
                        {checkProficiencyBonus("charisma") ? character.characterStats.charisma + addProficiencyBonus() : character.characterStats.charisma}
                    </li>
                </ul>
            </div>
        </>
    )
}