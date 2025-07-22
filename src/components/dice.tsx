import {type Dispatch, type SetStateAction, useState} from "react";
import {Button} from "@material-tailwind/react";

type DiceImageProps = {
    dice: number;
    selectedDices: SelectedDicesType[];
    setSelectedDices: Dispatch<SetStateAction<SelectedDicesType[]>>;
}

type SelectedDicesType = {
    dice: number;
    diceNumber: number;
}

function DiceImage({...props}: DiceImageProps) {

    const diceCount = props.selectedDices.find((d) => d.dice === props.dice)?.diceNumber ?? 0;

    function handleDiceClick(dice: number) {
        const existingDice = props.selectedDices.find((diceObj) => diceObj.dice === dice);

        if (existingDice) {
            const updatedDices = props.selectedDices.map((diceObj) => {
                if (diceObj.dice === dice) {
                    return {
                        ...diceObj,
                        diceNumber: diceObj.diceNumber + 1,
                    };
                } else {
                    return diceObj;
                }
            });

            props.setSelectedDices(updatedDices);
        } else {
            const newDice: SelectedDicesType = {
                dice: dice,
                diceNumber: 1,
            };

            props.setSelectedDices([...props.selectedDices, newDice]);
        }
    }

    return (
        <li className="flex flex-col items-center p-2">
            {diceCount > 0 && (
                <p className="text-sm w-full text-center rounded-full bg-red-800 text-white">
                    {diceCount}
                </p>
            )}

            <button onClick={() => handleDiceClick(props.dice)}>
                <img className="w-12 h-12" src={`d${props.dice}.svg`} alt={props.dice.toString()} />
            </button>
        </li>
    )
}

export default function Dice() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedDices, setSelectedDices] = useState<SelectedDicesType[]>([]);
    const [throwResult, setThrowResult] = useState<number>(0);

    function handleThrow(selectedDices: SelectedDicesType[]): void {
        let total = 0;

        for (const { dice, diceNumber } of selectedDices) {
            for (let i = 0; i < diceNumber; i++) {
                const diceThrow = Math.floor(Math.random() * dice) + 1;
                console.log("dice", dice)
                console.log("result", diceThrow);
                total += diceThrow;
            }
        }

        setThrowResult(total);
        setSelectedDices([]);
    }


    return (
        <>
            <div className="flex flex-row-reverse gap-4 bg-amber-300 rounded-2xl items-center">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <img className="w-16 h-16" src="/dices.svg" alt="Lancer un dé"/>
                </button>
                {isOpen && (
                    <ul className="flex flex-row-reverse items-center gap-2">
                        {throwResult !== 0 && (
                            <li>
                                Résultat: {throwResult}
                            </li>
                        )}
                        <Button className="text-black flex items-center" onClick={() => handleThrow(selectedDices)}>
                            Throw
                        </Button>
                        <DiceImage dice={20} selectedDices={selectedDices} setSelectedDices={setSelectedDices}/>
                        <DiceImage dice={12} selectedDices={selectedDices} setSelectedDices={setSelectedDices} />
                        <DiceImage dice={10} selectedDices={selectedDices} setSelectedDices={setSelectedDices} />
                        <DiceImage dice={8} selectedDices={selectedDices} setSelectedDices={setSelectedDices} />
                        <DiceImage dice={6} selectedDices={selectedDices} setSelectedDices={setSelectedDices} />
                        <DiceImage dice={4} selectedDices={selectedDices} setSelectedDices={setSelectedDices} />
                    </ul>
                )}
            </div>
        </>
    )
}