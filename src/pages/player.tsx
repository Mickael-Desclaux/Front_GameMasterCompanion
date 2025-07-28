import {useParams} from "react-router-dom";
import {character} from "@/fakeData/data.ts";

export default function PlayerPage() {

    const {playerId} = useParams();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center underline pb-4">{character.characterName}</h1>
            <h2 className="text-2xl font-bold text-center pb-4">{
                character.characterClass} {character.characterRace} de Niveau {character.characterLevel}
            </h2>

            {/*character sheet container*/}
            <div className="w-full h-full border-2 border-gray-200 rounded-lg p-8">
                {/*first column : stats + languages*/}
                <div className="flex flex-col w-1/3 border-2 border-gray-200 rounded-lg p-4">
                    {/*stats*/}
                    <div className="flex flex-row w-1/2">
                        <ul className="flex flex-col">
                            <li>Force</li>
                            <li>Dextérité</li>
                            <li>Constitution</li>
                            <li>Intelligence</li>
                            <li>Sagesse</li>
                            <li>Charisme</li>
                        </ul>
                    </div>
                    {/*inspirations + detailed stats*/}
                    <div className="flex flex-col w-1/2">
                        <ul className="flex flex-col">
                            <li>Inspirations</li>
                            <li>Bonus de maîtrise</li>
                            <li>Jets de sauvegarde</li>
                            <li>Compétences</li>
                        </ul>
                    </div>
                    <div className="flex flex-row w-full">
                        Perception passive
                    </div>
                    <div className="flex flex-row w-full">
                        Autre maîtrises et langues
                    </div>
                </div>
            </div>
        </div>
    )
}