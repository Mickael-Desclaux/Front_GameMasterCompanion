import type {PlayerSummary} from "@/types/characters.ts";
import PlayerStatus from "@/components/playerStatus.tsx";

export default function CampaignResume() {

    const lastCampaignTitle: string = "Descente en Avernes";
    const lastChapter = {
        title: "Le Culte des Trois Morts",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere metus quis erat lacinia, " +
            "ut dictum mi euismod. Nam justo arcu, pharetra at nibh eu, porta viverra dolor. Nunc velit neque, varius id eros " +
            "eu, sagittis posuere augue. Maecenas euismod quis arcu vitae tincidunt. Nunc placerat fermentum odio vitae " +
            "dictum. Quisque fringilla est non tortor faucibus rhoncus. Aliquam in ullamcorper nulla. In ut mauris vel " +
            "urna ultrices ultrices.",
        link: "test-chapter",
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

    function reduceDescription(description: string): string {
        const maxCharacters = 300;
        if (description.length < maxCharacters) {
            return description;
        }

        return description.slice(0, maxCharacters) + "...";
    }

    return (
        <>
            <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 -mt-2">{lastCampaignTitle}</h3>
                <p className="text-xl underline mb-2">{lastChapter.title}</p>
                <p className="text-sm text-balance mt-4 mb-4">{reduceDescription(lastChapter.description)}</p>
            </div>
            <div className="grid grid-cols-2">
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