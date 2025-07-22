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
        <li className="relative p-2">
            <button onClick={() => handleDiceClick(props.dice)} className="relative">
                <img
                    src={`d${props.dice}.svg`}
                    alt={`d${props.dice}`}
                    className={`w-12 h-12 transition-opacity duration-200 ${
                        diceCount > 0 ? 'opacity-50' : 'opacity-100'
                    }`}
                />

                {diceCount > 0 && (
                    <span className="absolute inset-0 flex items-center justify-center text-black bg-white opacity-70 rounded-full text-xl font-bold pointer-events-none">
                        {diceCount}
                    </span>
                )}
            </button>
        </li>
    );
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
            <div className="flex flex-col-reverse h-full lg:flex-row-reverse gap-4 border-2 bg-gray-500 rounded-full items-center">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <img className="w-16 h-16" src="/d20.svg" alt="Lancer un dé"/>
                </button>
                {isOpen && (
                    <ul className="flex flex-col-reverse lg:flex-row-reverse items-center gap-2">
                        {throwResult !== 0 && (
                            <li>
                                Résultat: {throwResult}
                            </li>
                        )}
                        <Button className="text-black bg-gray-300 p-2 flex items-center" onClick={() => handleThrow(selectedDices)}>
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