import CharacterStats from "@/components/characterStats.tsx";
import type {Proficiency} from "@/types/characters.ts";

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
        characterStatsProficiencies: ["CHARISMA", "WISDOM"],
        characterDefenses: ["feu", "glace"],
        characterVulnerabilities: ["électrique", "contondant"],
        characterImmunities: ["perçant", "tranchant"],
        characterLanguages: ["commun", "elfe", "nain"],
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
                <CharacterStats
                    statsProficiencies={character.characterStatsProficiencies as Proficiency[]}
                    level={character.characterLevel}
                    strength={character.characterStats.strength}
                    dexterity={character.characterStats.dexterity}
                    constitution={character.characterStats.constitution}
                    intelligence={character.characterStats.intelligence}
                    wisdom={character.characterStats.wisdom}
                    charisma={character.characterStats.charisma} />
            </div>
        </>
    )
}