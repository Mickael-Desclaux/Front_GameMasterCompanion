import {computeStatBonus} from "@/utils/character.ts";

type StatDisplayProps = {
    label: "FOR" | "DEX" | "CON" | "INT" | "SAG" | "CHA";
    value: number;
}
export default function StatDisplay({label, value}: StatDisplayProps) {
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