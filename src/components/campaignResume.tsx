import type {PlayerSummary} from "@/types/characters.ts";
import PlayerStatus from "@/components/playerStatus.tsx";
import type {LastCampaign} from "@/types/campaigns.ts";
import type { LastChapter } from "@/types/chapters";
import {NavLink} from "react-router-dom";
import {shortenedText} from "@/utils/misc.ts";

export default function CampaignResume() {

    const lastCampaign: LastCampaign = {
        id: 1,
        title: "Descente en Avernes",
    };
    const lastChapter: LastChapter = {
        id: 1,
        title: "Le Culte des Trois Morts",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere metus quis erat lacinia, " +
            "ut dictum mi euismod. Nam justo arcu, pharetra at nibh eu, porta viverra dolor. Nunc velit neque, varius id eros " +
            "eu, sagittis posuere augue. Maecenas euismod quis arcu vitae tincidunt. Nunc placerat fermentum odio vitae " +
            "dictum. Quisque fringilla est non tortor faucibus rhoncus. Aliquam in ullamcorper nulla. In ut mauris vel " +
            "urna ultrices ultrices.",
    };
    const charactersData: PlayerSummary[] = [
        {
            playerId: 1,
            playerName: "Jean-Christophain de la table basse",
            playerClass: "Mage",
            playerRace: "Haut-Elfe",
            playerLevel: 2,
            playerCurrentHP: 15,
            playerMaxHP: 24,
            playerIcon: "https://docs.material-tailwind.com/img/face-2.jpg",
        },
        {
            playerId: 2,
            playerName: "Annick",
            playerClass: "Druidesse",
            playerRace: "Elfe des bois",
            playerLevel: 2,
            playerCurrentHP: 2,
            playerMaxHP: 30,
            playerIcon: "https://docs.material-tailwind.com/img/face-1.jpg",
        },
        {
            playerId: 3,
            playerName: "Jean-Pierre",
            playerClass: "Barde",
            playerRace: "Tieffelin",
            playerLevel: 2,
            playerCurrentHP: 8,
            playerMaxHP: 12,
            playerIcon: "https://docs.material-tailwind.com/img/face-3.jpg",
        },
        {
            playerId: 4,
            playerName: "Richard McGlutan",
            playerClass: "Barbare",
            playerRace: "Demi-Elfe",
            playerLevel: 2,
            playerCurrentHP: 21,
            playerMaxHP: 30,
            playerIcon: "https://docs.material-tailwind.com/img/face-4.jpg",
        },
    ]

    return (
        <>
            <div className="text-center">
                <NavLink to={`/campaign/${lastCampaign.id}`}>
                    <h3 className="text-2xl text-balance font-bold mb-2 -mt-2">{lastCampaign.title}</h3>
                </NavLink>
                <NavLink to={`/chapter/${lastChapter.id}`}>
                    <h4 className="text-xl text-balance underline mb-2">{lastChapter.title}</h4>
                </NavLink>
                <p className="text-sm text-balance lg:mt-4 lg:mb-4">{shortenedText(lastChapter.description, 300)}</p>
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