import { isLowHealthCharacter } from "@/utils/character";
import { NavLink } from "react-router-dom";

type PlayerStatusProps = {
	playerId: number;
	playerName: string;
	playerClass: string;
	playerRace: string;
	playerLevel: number;
	playerIcon: string;
	playerCurrentHP: number;
	playerMaxHP: number;
};

export default function PlayerStatus({ ...props }: PlayerStatusProps) {
	return (
		<div className="flex flex-col text-center lg:flex-row lg:text-left items-center p-2">
			<div className="w-1/2">
				<div className="flex justify-center items-center">
					<NavLink to={`/player/${props.playerId}`}>
						<img
							className="lg:w-24 lg:h-24 mb-2 rounded-2xl"
							src={props.playerIcon}
							alt={props.playerName}
						/>
					</NavLink>
				</div>
			</div>

			<div className="w-1/2 text-sm text-balance">
				<ul>
					<li className="font-bold">{props.playerName}</li>
					<li className="underline">
						{props.playerClass} {props.playerRace}
					</li>
					<li>Niveau {props.playerLevel}</li>
					<li>
						{isLowHealthCharacter(props.playerCurrentHP, props.playerMaxHP)
							? "🔴"
							: "🟢"}{" "}
						{props.playerCurrentHP} / {props.playerMaxHP} PV
					</li>
				</ul>
			</div>
		</div>
	);
}
