import {useParams} from "react-router-dom";
import PlayerStatus from "@/components/playerStatus.tsx";
import {shortenedText} from "@/utils/misc.ts";
import {campaignData} from "@/fakeData/data.ts";

export default function CampaignPage() {

    const {campaignId} = useParams();

    return (
        <>
            <h1>Titre de la campagne avec l'id : {campaignId}</h1>

            <div className="flex flex-col w-full justify-center">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 m-2 border-2 border-gray-200 rounded-lg p-4">
                        <h2>Liste des chapitres</h2>
                        <ul>
                            {campaignData.chapters.map((chapter, index) => (
                                <li key={index}>
                                    <div className="flex flex-col w-full justify-center">
                                        <div className="font-bold">
                                            {chapter.title}
                                        </div>
                                        <div>
                                            {shortenedText(chapter.description, 200)}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:w-1/2 m-2 border-2 border-gray-200 rounded-lg p-4">
                        <h2>Joueurs</h2>
                        <div className="grid lg:grid-cols-2 grid-cols-1">
                            {campaignData.characters.map((character, index) => (
                                <div key={index}>
                                    <PlayerStatus
                                        playerId={character.playerId}
                                        playerName={character.playerName}
                                        playerClass={character.playerClass}
                                        playerRace={character.playerRace}
                                        playerLevel={character.playerLevel}
                                        playerIcon={character.playerIcon}
                                        playerCurrentHP={character.playerCurrentHP}
                                        playerMaxHP={character.playerMaxHP}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 m-2 border-2 border-gray-200 rounded-lg p-4">
                        <h2>Liste des PNJ?</h2>
                    </div>
                    <div className="lg:w-1/2 m-2 border-2 border-gray-200 rounded-lg p-4">
                        <h2>Liste des notes</h2>
                    </div>
                </div>
            </div>
        </>
    )
}