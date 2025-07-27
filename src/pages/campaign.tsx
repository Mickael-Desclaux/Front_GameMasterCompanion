import {NavLink, useParams} from "react-router-dom";
import PlayerStatus from "@/components/playerStatus.tsx";
import {shortenedText} from "@/utils/misc.ts";
import {campaignData} from "@/fakeData/data.ts";
import {useState} from "react";

type ChapterDetailsProps = {
    id: number;
    title: string;
    description: string;
}

function ChapterDetails({id, title, description}: ChapterDetailsProps) {

    const [isOpen, setOpen] = useState(false);

    return (
        <li className="pb-4">
            <div className="flex flex-col w-full justify-center">
                <div className="font-bold flex flex-row gap-2">
                    <NavLink to={`/chapter/${id}`} className="flex justify-start text-lg">
                        {title}
                    </NavLink>
                    <button className="flex justify-end" onClick={() => setOpen(!isOpen)}>
                        <img src="/down.svg" alt="expand"/>
                    </button>
                </div>

                {isOpen && (
                    <div className="italic font-normal text-sm">
                        {shortenedText(description, 500)}
                    </div>)
                }
            </div>
        </li>
    )
}

export default function CampaignPage() {

    const {campaignId} = useParams();

    return (
        <>
            <div className="flex flex-row w-full h-screen">
                <div className="flex flex-col lg:w-1/3">
                    <div className="h-full m-2 border-2 border-gray-200 rounded-lg p-4">
                        <h2 className="pb-4 underline text-2xl font-bold text-center">Chapitres</h2>
                        <ul>
                            {campaignData.chapters.map((chapter) => (
                                <ChapterDetails id={chapter.id} title={chapter.title}
                                                description={chapter.description}/>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="lg:w-2/3">
                    <div className="h-full w-full flex flex-col">
                        <div className="border-2 border-gray-200 rounded-lg m-2 p-4">
                            <h2 className="pb-4 underline text-2xl font-bold text-center">Joueurs</h2>
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
                        <div className="border-2 border-gray-200 rounded-lg m-2 p-4">
                            <h2>Liste des notes</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}