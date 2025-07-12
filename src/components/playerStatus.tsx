import {NavLink} from "react-router-dom";

type PlayerStatusProps = {
    playerName: string;
    playerClass: string;
    playerRace: string;
    playerLevel: number;
    playerIcon: string;
    playerCurrentHP: number;
    playerMaxHP: number;
    playerState: string;
    playerSheetLink: string;
}

export default function PlayerStatus({...props}: PlayerStatusProps) {

    return (
        <div className="flex flex-row">
            <div className="w-1/2">
                <img src={props.playerIcon} alt={props.playerName} />
            </div>
            <div className="w-1/2">
                <ul>
                    <li>{props.playerName}</li>
                    <li>{props.playerRace}</li>
                    <li>{props.playerClass}</li>
                    <li>{props.playerLevel}</li>
                    <li>{props.playerCurrentHP} / {props.playerMaxHP} PV</li>
                    <li>{props.playerState}</li>
                </ul>
                <NavLink to={props.playerSheetLink}>Fiche personnage</NavLink>
            </div>
        </div>
    )
}