import {NavLink} from "react-router-dom";
import type {CharacterClass} from "@/types/characters.ts";
import {shortenedText} from "@/utils/misc.ts";
import {lastSpell} from "@/fakeData/data.ts";

export default function SpellResume() {

    return (
        <>
            <NavLink to={`/spell/${lastSpell.id}`}>
                <div>
                    <div className="flex flex-col lg:flex-row align-middle items-center mb-2 -mt-1">
                        <h3 className="font-bold text-2xl text-center lg:text-left w-full">{lastSpell.name}</h3>
                        <div className="flex flex-row text-center m-2 lg:m-0 gap-4 text-sm">
                            {lastSpell.classes.map((characterClass: CharacterClass, index: number) => (
                                <div key={index} className="p-1 bg-amber-300 rounded-sm">
                                    {characterClass}
                                </div>
                            ))}
                        </div>
                    </div>
                    <ul className="text-sm">
                        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 mb-2">
                            <li className="font-bold">Niveau {lastSpell.level}</li>
                            <li className="font-bold">Temps d'incantation: {lastSpell.castingTime}</li>
                            <li className="font-bold">Durée: {lastSpell.duration}</li>
                        </div>
                        <li>{shortenedText(lastSpell.description, 350)}</li>
                    </ul>
                </div>
            </NavLink>
        </>
    )
}