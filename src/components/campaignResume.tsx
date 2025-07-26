import PlayerStatus from "@/components/playerStatus.tsx";
import {NavLink} from "react-router-dom";
import {shortenedText} from "@/utils/misc.ts";
import {charactersData, lastCampaign, lastChapter} from "@/fakeData/data.ts";

export default function CampaignResume() {

    return (
        <>
            <div className="text-center">
                <NavLink to={`/campaign/${lastCampaign.id}`}>
                    <h3 className="text-2xl text-balance font-bold mb-2 -mt-2">{lastCampaign.title}</h3>
                </NavLink>
                <NavLink to={`/chapter/${lastChapter.id}`}>
                    <h4 className="text-xl text-balance underline mb-4">{lastChapter.title}</h4>
                </NavLink>
                <p className="text-sm text-balance lg:mt-4 mb-4">{shortenedText(lastChapter.description, 300)}</p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1">
                {charactersData.map((character, index) => (
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
        </>
    )
}