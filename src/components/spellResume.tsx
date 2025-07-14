import {NavLink} from "react-router-dom";
import type {SpellResume} from "@/types/spell.ts";
import type {CharacterClass} from "@/types/characters.ts";
import {shortenedText} from "@/utils/misc.ts";

export default function SpellResume() {

    const lastSpell: SpellResume = {
        id: 1,
        name: "Boule de feu",
        level: 3,
        castingTime: "1 action",
        duration: "instantanée",
        classes: ["Ensorceleur", "Magicien", "Occultiste"],
        description: "Une éclatante traînée lumineuse est émise de la pointe de votre doigt vers un point de votre choix " +
            "dans la portée du sort, puis s'amplifie dans un rugissement grave jusqu'à éclater en flammes. Chaque " +
            "créature située dans une sphère de 6 mètres de rayon centrée sur le point doit effectuer un jet de " +
            "sauvegarde de Dextérité, subissant 8d6 dégâts de feu en cas d'échec, ou la moitié de ces dégâts en cas de réussite." +
            "Le feu contourne les coins. Il enflamme les objets inflammables qui ne sont pas portés ou transportés.",
    }

    return (
        <>
            <NavLink to={`/spell/${lastSpell.id}`}>
                <div>
                    <div className="flex flex-row align-middle items-center mb-2 -mt-1">
                        <h3 className="font-bold text-2xl w-full">{lastSpell.name}</h3>
                        <div className="flex flex-row gap-4 text-sm">
                            {lastSpell.classes.map((characterClass: CharacterClass, index: number) => (
                                <div key={index} className="p-1 bg-amber-300 rounded-sm">
                                    {characterClass}
                                </div>
                            ))}
                        </div>
                    </div>
                    <ul className="text-sm">
                        <div className="flex flex-row gap-4 mb-2">
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