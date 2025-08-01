import {type Dispatch, type SetStateAction, useState} from "react";
import {Button} from "@material-tailwind/react";

type DiceImageProps = {
    dice: number;
    selectedDices: SelectedDicesType[];
    setSelectedDices: Dispatch<SetStateAction<SelectedDicesType[]>>;
}

type SelectedDicesType = {
    dice: number;
    counter: number;
}

function DiceImage({...props}: DiceImageProps) {

    const diceCount = props.selectedDices.find((d) => d.dice === props.dice)?.counter ?? 0;

    function handleDiceClick(dice: number) {
        const existingDice = props.selectedDices.find((diceObj) => diceObj.dice === dice);

        if (existingDice) {
            const updatedDices = props.selectedDices.map((diceObj) => {
                if (diceObj.dice === dice) {
                    return {
                        ...diceObj,
                        counter: diceObj.counter + 1,
                    };
                } else {
                    return diceObj;
                }
            });

            props.setSelectedDices(updatedDices);
        } else {
            const newDice: SelectedDicesType = {
                dice: dice,
                counter: 1,
            };

            props.setSelectedDices([...props.selectedDices, newDice]);
        }
    }

    return (
        <li className="flex items-center p-2">
            <button onClick={() => handleDiceClick(props.dice)} className="relative">
                <img
                    src={`/d${props.dice}.svg`}
                    alt={`d${props.dice}`}
                    className={`w-12 h-12 transition-opacity duration-200 ${
                        diceCount > 0 ? 'opacity-50' : 'opacity-100'
                    }`}
                />

                {diceCount > 0 && (
                    <span
                        className="absolute inset-0 flex items-center justify-center text-black bg-white opacity-80 rounded-full text-xl font-bold pointer-events-none">
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

        for (const {dice, counter} of selectedDices) {
            for (let i = 0; i < counter; i++) {
                const diceThrow = Math.floor(Math.random() * dice) + 1;
                total += diceThrow;
            }
        }

        setThrowResult(total);
        setSelectedDices([]);
    }


    return (
        <>
            <div
                className={`flex flex-col-reverse h-full lg:flex-row-reverse gap-4 rounded-2xl p-2 items-center ${isOpen ? "bg-gray-100 border-2 border-gray-300" : ""} shadow-sm`}>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <img className="w-16 h-16" src="/d20.svg" alt="Lancer un dé"/>
                </button>
                {isOpen && (
                    <ul className="flex flex-col-reverse lg:flex-row-reverse items-center gap-4">
                        {throwResult !== 0 && (
                            <li className="text-black p-2 flex items-center font-bold rounded-lg">
                                Résultat: {throwResult}
                            </li>
                        )}
                        <Button className="flex-wrap text-black bg-amber-300 p-2 flex items-center"
                                onClick={() => handleThrow(selectedDices)}>
                            Lancer
                        </Button>
                        <DiceImage dice={20} selectedDices={selectedDices} setSelectedDices={setSelectedDices}/>
                        <DiceImage dice={12} selectedDices={selectedDices} setSelectedDices={setSelectedDices}/>
                        <DiceImage dice={10} selectedDices={selectedDices} setSelectedDices={setSelectedDices}/>
                        <DiceImage dice={8} selectedDices={selectedDices} setSelectedDices={setSelectedDices}/>
                        <DiceImage dice={6} selectedDices={selectedDices} setSelectedDices={setSelectedDices}/>
                        <DiceImage dice={4} selectedDices={selectedDices} setSelectedDices={setSelectedDices}/>
                    </ul>
                )}
            </div>
        </>
    )
}