import PlayerStatus from "@/components/playerStatus.tsx";
import type {PlayerSummary} from "@/types/characters.ts";

export default function Home() {

    const charactersData: PlayerSummary[] = [
        {
            playerName: "Jean-Christophain de la table basse",
            playerClass: "Mage",
            playerRace: "Haut-Elfe",
            playerLevel: 2,
            playerCurrentHP: 15,
            playerMaxHP: 24,
            playerState: "Empoisonné",
            playerIcon: "https://docs.material-tailwind.com/img/face-2.jpg",
            playerSheetLink: "test"
        },
        {
            playerName: "Annick",
            playerClass: "Druidesse",
            playerRace: "Elfe des bois",
            playerLevel: 2,
            playerCurrentHP: 18,
            playerMaxHP: 30,
            playerState: "Morte",
            playerIcon: "https://docs.material-tailwind.com/img/face-1.jpg",
            playerSheetLink: "test"
        },
        {
            playerName: "Jean-Pierre",
            playerClass: "Barde",
            playerRace: "Tieffelin",
            playerLevel: 2,
            playerCurrentHP: 8,
            playerMaxHP: 12,
            playerState: "",
            playerIcon: "https://docs.material-tailwind.com/img/face-3.jpg",
            playerSheetLink: "test"
        },
        {
            playerName: "Richard McGlutan",
            playerClass: "Barbare",
            playerRace: "Demi-Elfe",
            playerLevel: 2,
            playerCurrentHP: 21,
            playerMaxHP: 30,
            playerState: "Hémoragie",
            playerIcon: "https://docs.material-tailwind.com/img/face-4.jpg",
            playerSheetLink: "test"
        },
    ]

    return (
        <div className="flex flex-col w-full h-full justify-center">
            <div className="flex flex-row w-full h-full">
                <div className="w-1/2 m-2">
                    <ul>
                        <li>Dernière campagne consultée</li>
                        <li>Chapitre en cours</li>
                        <li>Dernière note ajoutée</li>
                    </ul>
                    <div>
                        <PlayerStatus
                            playerName={}
                            playerClass={}
                            playerRace={}
                            playerLevel={}
                            playerIcon={}
                            playerCurrentHP={}
                            playerMaxHP={}
                            playerState={}
                            playerSheetLink={}/>
                    </div>
                </div>
                <div className="w-1/2 m-2">
                    Dernier personnage consulté
                </div>
            </div>
            <div className="flex flex-row w-full h-full">
                <div className="w-1/3 m-2">
                    Dernier PNJ consulté
                </div>
                <div className="w-1/3 m-2">
                    Dernier sort consulté
                </div>
                <div className="w-1/3 m-2">
                    Dernier note consultée
                </div>
            </div>
        </div>
    )
}