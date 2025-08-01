import type {Proficiency} from "@/types/characters.ts";
import StatDisplay from "@/components/statDisplay.tsx";

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
export default function CharacterStats({...props}: CharacterStatsProps) {

    return (
        <>
            <ul className="grid grid-cols-3 gap-4 mt-2 lg:grid-cols-6 content-evenly lg:m-0">
                <StatDisplay label={"FOR"} value={props.strength}/>
                <StatDisplay label={"DEX"} value={props.dexterity}/>
                <StatDisplay label={"CON"} value={props.constitution}/>
                <StatDisplay label={"INT"} value={props.intelligence}/>
                <StatDisplay label={"SAG"} value={props.wisdom}/>
                <StatDisplay label={"CHA"} value={props.charisma}/>
            </ul>
        </>
    )
}