import {useParams} from "react-router-dom";
import {character} from "@/fakeData/data.ts";
import StatDisplay from "@/components/statDisplay.tsx";
import {addProficiencyBonus, checkProficiencyBonus, computeStatBonus} from "@/utils/character.ts";
import type {CharacterStats, Proficiency, Skill} from "@/types/characters.ts";

export default function PlayerPage() {

    const {playerId} = useParams();

    return (
        <div className="p-8 text-xs">
            <h1 className="text-3xl font-bold text-center underline pb-4">{character.characterName}</h1>
            <h2 className="text-2xl font-bold text-center pb-4">{
                character.characterClass} {character.characterRace} de Niveau {character.characterLevel}
            </h2>

            {/*character sheet container*/}
            <div className="w-full h-full border-2 border-gray-200 rounded-lg p-4">
                {/*first column : stats + languages*/}
                <div className="flex flex-col w-1/3">
                    {/*stats*/}
                    <div className="flex flex-row gap-2 items-center">
                        <div className="flex flex-col w-1/4">
                            <ul className="flex flex-col gap-4 p-4 text-sm">
                                <StatDisplay label={"FOR"} value={character.characterStats.strength}/>
                                <StatDisplay label={"DEX"} value={character.characterStats.dexterity}/>
                                <StatDisplay label={"CON"} value={character.characterStats.constitution}/>
                                <StatDisplay label={"INT"} value={character.characterStats.intelligence}/>
                                <StatDisplay label={"SAG"} value={character.characterStats.wisdom}/>
                                <StatDisplay label={"CHA"} value={character.characterStats.charisma}/>
                            </ul>
                        </div>
                        {/*inspirations + detailed stats*/}
                        <div className="flex flex-col w-3/4 p-4">
                            <ul className="flex flex-col gap-2">
                                <li className="w-full border-2 rounded-sm">
                                    <div className="flex flex-row items-center gap-2 w-full p-4 font-bold">
                                        <span
                                            className="px-1 py-0.5 bg-gray-200 w-8 text-center rounded-sm">{character.characterInspirations}</span>
                                        <span className="text-center w-full">Inspirations</span>
                                    </div>
                                </li>
                                <li className="w-full border-2 rounded-sm">
                                    <div className="flex flex-row items-center gap-2 w-full p-4 font-bold">
                                        <span
                                            className="px-1 py-0.5 bg-gray-200 w-8 text-center rounded-sm">+{addProficiencyBonus(character.characterLevel)}</span>
                                        <span className="text-center w-full">Bonus de maîtrise</span>
                                    </div>
                                </li>
                                <SavingThrowsList statProficiencies={character.characterStatsProficiencies}
                                                  stat={character.characterStats} level={character.characterLevel}/>
                                <SkillsList skillsProficiencies={character.characterSkillsProficiencies}
                                            stat={character.characterStats} level={character.characterLevel}/>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div
                            className="flex flex-row w-full border-2 border-gray-200 p-4 rounded-lg gap-4 items-center font-bold">
                            <div className="px-1 py-0.5 bg-gray-200 w-8 text-center rounded-sm">
                                {10 + Number(computeStatBonus(character.characterStats.wisdom))}
                            </div>
                            <div>
                                Sagesse (Perception) Passive
                            </div>
                        </div>
                        <div className="flex flex-row w-full border-2 p-4 rounded-lg">
                            Autre maîtrises et langues
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

type SkillsListProps = {
    skillsProficiencies: Skill[],
    stat: CharacterStats,
    level: number
}

function SkillsList({skillsProficiencies, stat, level}: SkillsListProps) {
    return (
        <ul className="border-2 border-gray-200 rounded-lg p-4 flex flex-col gap-2">
            <SkillStat skillProficiencies={skillsProficiencies} label="Acrobaties" stat={stat.dexterity}
                       proficiency={"ACROBATICS"} level={level}/>
            <SkillStat skillProficiencies={skillsProficiencies} label="Arcane" stat={stat.intelligence}
                       proficiency={"ARCANA"} level={level}/>
            <SkillStat skillProficiencies={skillsProficiencies} label="Athlétisme" stat={stat.strength}
                       proficiency={"ATHLETICS"} level={level}/>
            <SkillStat skillProficiencies={skillsProficiencies} label="Discrétion" stat={stat.dexterity}
                       proficiency={"STEALTH"} level={level}/>
            <SkillStat skillProficiencies={skillsProficiencies} label="Dressage" stat={stat.wisdom}
                       proficiency={"ANIMAL_HANDLING"} level={level}/>
            <SkillStat skillProficiencies={skillsProficiencies} label="Escamotage" stat={stat.dexterity}
                       proficiency={"SLEIGHT_OF_HAND"} level={level}/>
            <SkillStat skillProficiencies={skillsProficiencies} label="Histoire" stat={stat.intelligence}
                       proficiency={"HISTORY"} level={level}/>
            <SkillStat skillProficiencies={skillsProficiencies} label="Intimidation" stat={stat.charisma}
                       proficiency={"INTIMIDATION"} level={level}/>
            <SkillStat skillProficiencies={skillsProficiencies} label="Investigation" stat={stat.intelligence}
                       proficiency={"INVESTIGATION"} level={level}/>
            <SkillStat skillProficiencies={skillsProficiencies} label="Médecine" stat={stat.wisdom}
                       proficiency={"MEDICINE"} level={level}/>
            <SkillStat skillProficiencies={skillsProficiencies} label="Nature" stat={stat.intelligence}
                       proficiency={"NATURE"} level={level}/>
            <SkillStat skillProficiencies={skillsProficiencies} label="Perception" stat={stat.wisdom}
                       proficiency={"PERCEPTION"} level={level}/>
            <SkillStat skillProficiencies={skillsProficiencies} label="Perspicacité" stat={stat.wisdom}
                       proficiency={"INSIGHTS"} level={level}/>
            <SkillStat skillProficiencies={skillsProficiencies} label="Persuasion" stat={stat.charisma}
                       proficiency={"PERSUASION"} level={level}/>
            <SkillStat skillProficiencies={skillsProficiencies} label="Religion" stat={stat.intelligence}
                       proficiency={"RELIGION"} level={level}/>
            <SkillStat skillProficiencies={skillsProficiencies} label="Représentation" stat={stat.charisma}
                       proficiency={"PERFORMANCE"} level={level}/>
            <SkillStat skillProficiencies={skillsProficiencies} label="Survie" stat={stat.wisdom}
                       proficiency={"SURVIVAL"} level={level}/>
            <SkillStat skillProficiencies={skillsProficiencies} label="Tromperie" stat={stat.charisma}
                       proficiency={"DECEPTION"} level={level}/>
            <li className="font-bold text-center mt-2">Compétences</li>
        </ul>
    )
}

type SavingThrowsListProps = {
    statProficiencies: Proficiency[],
    stat: CharacterStats,
    level: number
}

function SavingThrowsList({statProficiencies, stat, level}: SavingThrowsListProps) {

    return (
        <ul className="border-2 border-gray-200 rounded-lg p-4 flex flex-col gap-2">
            <SavingThrowStat statProficiencies={statProficiencies} statLabel="Force" stat={stat.strength}
                             proficiency={"STRENGTH"} level={level}/>
            <SavingThrowStat statProficiencies={statProficiencies} statLabel="Dextérité" stat={stat.dexterity}
                             proficiency={"DEXTERITY"} level={level}/>
            <SavingThrowStat statProficiencies={statProficiencies} statLabel="Constitution" stat={stat.constitution}
                             proficiency={"CONSTITUTION"} level={level}/>
            <SavingThrowStat statProficiencies={statProficiencies} statLabel="Intelligence" stat={stat.intelligence}
                             proficiency={"INTELLIGENCE"} level={level}/>
            <SavingThrowStat statProficiencies={statProficiencies} statLabel="Sagesse" stat={stat.wisdom}
                             proficiency={"WISDOM"} level={level}/>
            <SavingThrowStat statProficiencies={statProficiencies} statLabel="Charisme" stat={stat.charisma}
                             proficiency={"CHARISMA"} level={level}/>
            <li className="font-bold text-center mt-2">Jets de sauvegarde</li>
        </ul>
    )
}

type SavingThrowStatProps = {
    statProficiencies: Proficiency[],
    proficiency: Proficiency,
    statLabel: string,
    stat: number,
    level: number
}

function SavingThrowStat({statProficiencies, statLabel, stat, proficiency, level}: SavingThrowStatProps) {
    return (
        <li className="flex flex-row  items-center gap-2">
            <input type="radio" readOnly={true}
                   className="appearance-none peer w-3 h-3 border-2 border-gray-300 rounded-full checked:bg-slate-800 checked:border-slate-800"
                   checked={checkProficiencyBonus(statProficiencies, proficiency)}/>
            <span className="px-1 py-0.5 bg-gray-200 w-8 text-center rounded-sm">
                {checkProficiencyBonus(statProficiencies, proficiency) ?
                    `+${Number(computeStatBonus(stat)) + addProficiencyBonus(level)}` :
                    computeStatBonus(stat)}</span>
            <span>{statLabel}</span>
        </li>
    )
}

type SkillStatProps = {
    skillProficiencies: Skill[],
    proficiency: Skill,
    label: string,
    stat: number,
    level: number
}

function SkillStat({skillProficiencies, label, stat, proficiency, level}: SkillStatProps) {
    return (
        <li className="flex flex-row  items-center gap-2">
            <input type="radio" readOnly={true}
                   className="appearance-none peer w-3 h-3 border-2 border-gray-300 rounded-full checked:bg-slate-800 checked:border-slate-800"
                   checked={checkProficiencyBonus(skillProficiencies, proficiency)}/>
            <span className="px-1 py-0.5 bg-gray-200 w-8 text-center rounded-sm">
                {checkProficiencyBonus(skillProficiencies, proficiency) ?
                    `+${Number(computeStatBonus(stat)) + addProficiencyBonus(level)}` :
                    computeStatBonus(stat)}</span>
            <span>{label}</span>
        </li>
    )
}