import type {Proficiency} from "@/types/characters.ts";

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
        <li>
            <div className="flex flex-col items-center">
                <div>
                    {label}
                </div>
                <div>
                    {value}
                </div>
            </div>
        </li>
    )
}
export default function CharacterStats({...props}: CharacterStatsProps) {

    return (
        <>
            <ul className="flex flex-row justify-evenly">
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