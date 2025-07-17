import type {Proficiency} from "@/types/characters.ts";
import {computeStatBonus} from "@/utils/character.ts";

type CharacterStatsProps = {
    statsProficiencies: Proficiency[];
    level: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

type StatDisplayProps = {
    label: "FOR" | "DEX" | "CON" | "INT" | "SAG" | "CHA";
    value: number;
}
function StatDisplay({label, value}: StatDisplayProps) {
    return (
        <li className="border-2 border-gray-200 rounded-lg p-3">
            <div className="flex flex-col items-center">
                <div className="font-bold">
                    {label}
                </div>
                <div>
                    {value}
                </div>
                <div>
                    {computeStatBonus(value)}
                </div>
            </div>
        </li>
    )
}
export default function CharacterStats({...props}: CharacterStatsProps) {

    return (
        <>
            <ul className="grid grid-cols-3 gap-4 mt-2 lg:grid-cols-6 content-evenly lg:m-0">
                <StatDisplay label={"FOR"} value={props.strength} />
                <StatDisplay label={"DEX"} value={props.dexterity} />
                <StatDisplay label={"CON"} value={props.constitution} />
                <StatDisplay label={"INT"} value={props.intelligence} />
                <StatDisplay label={"SAG"} value={props.wisdom} />
                <StatDisplay label={"CHA"} value={props.charisma} />
            </ul>
        </>
    )
}