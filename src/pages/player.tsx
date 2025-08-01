import {useParams} from "react-router-dom";
import {character} from "@/fakeData/data.ts";
import StatDisplay from "@/components/statDisplay.tsx";
import {addProficiencyBonus, checkProficiencyBonus, computeStatBonus} from "@/utils/character.ts";
import type {CharacterStats, Proficiency} from "@/types/characters.ts";

export default function PlayerPage() {

    const {playerId} = useParams();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center underline pb-4">{character.characterName}</h1>
            <h2 className="text-2xl font-bold text-center pb-4">{
                character.characterClass} {character.characterRace} de Niveau {character.characterLevel}
            </h2>

            {/*character sheet container*/}
            <div className="w-full h-full border-2 border-gray-200 rounded-lg p-4">
                {/*first column : stats + languages*/}
                <div className="flex flex-col w-1/3">
                    {/*stats*/}
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col w-1/4">
                            <ul className="flex flex-col gap-2 p-4">
                                <StatDisplay label={"FOR"} value={character.characterStats.strength}/>
                                <StatDisplay label={"DEX"} value={character.characterStats.dexterity}/>
                                <StatDisplay label={"CON"} value={character.characterStats.constitution}/>
                                <StatDisplay label={"INT"} value={character.characterStats.intelligence}/>
                                <StatDisplay label={"SAG"} value={character.characterStats.wisdom}/>
                                <StatDisplay label={"CHA"} value={character.characterStats.charisma}/>
                            </ul>
                        </div>
                        {/*inspirations + detailed stats*/}
                        <div className="flex flex-col w-3/4 border-2 border-gray-200 rounded-lg p-4">
                            <ul className="flex flex-col gap-2">
                                <li className="w-full border-2 rounded-sm">
                                    <div className="flex flex-row items-center gap-2 w-full p-4 font-bold">
                                        <span>{character.characterInspirations}</span>
                                        <span className="text-center w-full">Inspirations</span>
                                    </div>
                                </li>
                                <li className="w-full border-2 rounded-sm">
                                    <div className="flex flex-row items-center gap-2 w-full p-4 font-bold">
                                        <span>+{addProficiencyBonus(character.characterLevel)}</span>
                                        <span className="text-center w-full">Bonus de maîtrise</span>
                                    </div>
                                </li>
                                <SavingThrowsList statProficiencies={character.characterStatsProficiencies}
                                                  stat={character.characterStats}/>
                                <li className="w-full bg-amber-300">Compétences</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-row w-full">
                        Perception passive
                    </div>
                    <div className="flex flex-row w-full border-2 p-4 rounded-lg">
                        Autre maîtrises et langues
                    </div>
                </div>
            </div>
        </div>
    );
}

type SavingThrowsListProps = {
    statProficiencies: Proficiency[],
    stat: CharacterStats,
}

function SavingThrowsList({statProficiencies, stat}: SavingThrowsListProps) {

    return (
        <ul className="border-2 border-gray-200 rounded-lg p-4">
            <SavingThrowStat statProficiencies={statProficiencies} statLabel="Force" stat={stat.strength}
                             proficiency={"STRENGTH"}/>
            <SavingThrowStat statProficiencies={statProficiencies} statLabel="Dextérité" stat={stat.dexterity}
                             proficiency={"DEXTERITY"}/>
            <SavingThrowStat statProficiencies={statProficiencies} statLabel="Constitution" stat={stat.constitution}
                             proficiency={"CONSTITUTION"}/>
            <SavingThrowStat statProficiencies={statProficiencies} statLabel="Intelligence" stat={stat.intelligence}
                             proficiency={"INTELLIGENCE"}/>
            <SavingThrowStat statProficiencies={statProficiencies} statLabel="Sagesse" stat={stat.wisdom}
                             proficiency={"WISDOM"}/>
            <SavingThrowStat statProficiencies={statProficiencies} statLabel="Charisme" stat={stat.charisma}
                             proficiency={"CHARISMA"}/>
            <li className="font-bold text-center">Jets de sauvegarde</li>
        </ul>
    )
}

type SavingThrowStatProps = {
    statProficiencies: Proficiency[],
    proficiency: Proficiency,
    statLabel: string,
    stat: number
}

function SavingThrowStat({statProficiencies, statLabel, stat, proficiency}: SavingThrowStatProps) {
    return (
        <li className="flex flex-row gap-2">
            <input type="checkbox" readOnly={true} className="rounded-full"
                   checked={checkProficiencyBonus(statProficiencies, proficiency)}/>
            <span>{computeStatBonus(stat)}</span>
            <span>{statLabel}</span>
        </li>
    )
}