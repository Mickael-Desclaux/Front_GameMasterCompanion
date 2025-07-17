import CharacterStats from "@/components/characterStats.tsx";
import type {Proficiency} from "@/types/characters.ts";
import type {ReactNode} from "react";

type StatBlockProps = {
    label: string;
    children: ReactNode
}

function StatBlock({ label, children }: StatBlockProps) {
    return (
        <div className="flex flex-col items-center border-2 border-gray-200 rounded-lg p-2 m-2 lg:m-0">
            <div className="font-bold text-center text-balance">{label}</div>
            <div>{children}</div>
        </div>
    )
}

type ListDisplayProps = {
    label: string;
    dataList: string[];
}

function ListDisplay({label, dataList}: ListDisplayProps) {
    return (
        <div className="flex flex-col border-2 border-gray-200 rounded-lg p-2 mt-4 lg:m-0 min-w-1/5">
            <div className="font-bold mb-1">{label}:</div>
            <ul className="text-sm flex flex-col">
                {dataList.map((element: string, index: number) => (
                    <div key={index}>
                        <li>● {element.toUpperCase()}</li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

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
        characterLanguages: ["commun", "elfe", "nain", "infernal"],
    }

    return (
        <>
            <h3 className="text-center font-bold text-2xl mb-2 -mt-2">{character.characterName}</h3>
            <h4 className="text-center underline text-xl mb-4">{character.characterClass} {character.characterRace} -
                Niveau {character.characterLevel}</h4>
            <div className="flex flex-col lg:flex-row flex-wrap">
                <div className="flex justify-center lg:justify-start lg:w-1/4">
                    <img src={character.characterIcon} alt={character.characterName} className="w-48 h-48 rounded-2xl"/>
                </div>
                <div className="flex flex-col justify-center lg:justify-evenly lg:w-2/3 m-2 lg:m-0">
                    <div className="grid lg:grid-cols-4 grid-cols-2 lg:content-evenly gap-2 m-1 justify-center items-center lg:justify-evenly">
                        <StatBlock label="PV" children={`${character.characterCurrentHealth} / ${character.characterMaxHealth}`} />
                        <StatBlock label="Initiative" children={character.characterInitiative > 0 ? `+${character.characterInitiative}` : `-${character.characterInitiative}`}/>
                        <StatBlock label="CA" children={character.characterArmor} />
                        <StatBlock label="Inspirations" children={character.characterInspirations} />
                    </div>
                    <div className="flex flex-row justify-center">
                        <CharacterStats
                            statsProficiencies={character.characterStatsProficiencies as Proficiency[]}
                            level={character.characterLevel}
                            strength={character.characterStats.strength}
                            dexterity={character.characterStats.dexterity}
                            constitution={character.characterStats.constitution}
                            intelligence={character.characterStats.intelligence}
                            wisdom={character.characterStats.wisdom}
                            charisma={character.characterStats.charisma}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-evenly mt-4">
                <ListDisplay label="Résistances" dataList={character.characterDefenses} />
                <ListDisplay label="Vulnérabilités" dataList={character.characterVulnerabilities} />
                <ListDisplay label="Immunités" dataList={character.characterImmunities} />
                <ListDisplay label="Langues" dataList={character.characterLanguages} />
            </div>
        </>
    )
}