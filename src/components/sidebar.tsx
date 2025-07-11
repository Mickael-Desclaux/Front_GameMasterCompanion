import {Card, List, ListItem, Typography} from "@material-tailwind/react";
import {NavLink} from "react-router-dom";
import {useState} from "react";
export default function Sidebar() {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    if (!isOpen) {
        return <ClosedSidebar/>
    }

    return (
        <Card className="h-[100vh] w-full flex flex-col max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="flex justify-end w-full">
                <img src="/close.svg" alt="Close menu" className="w-6 h-6" onClick={() => setIsOpen(false)} />
            </div>
            <div className="mb-2 p-4 flex flex-row items-center">
                <img src="/dice.svg" alt="dice" className="w-8 h-8 pe-2" />
                <Typography variant="h5" color="blue-gray">
                    Game Master Companion
                </Typography>
            </div>
            <List className="gap-6">
                <ListItem>
                    <NavLink to={"/"} aria-current="page">
                        Accueil
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to={"/campaigns"} aria-current="page">
                        Campagnes
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to={"/characters"} aria-current="page">
                        Personnages
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to={"/npcs"} aria-current="page">
                        PNJ
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to={"/spells"} aria-current="page">
                        Sorts
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to={"/medias"} aria-current="page">
                        Medias
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to={"/notes"} aria-current="page">
                        Notes
                    </NavLink>
                </ListItem>
            </List>
        </Card>
    );

    function ClosedSidebar() {

        type IconDisplayProps = {
            icon: string;
            alt: string;
        }
        function IconDisplay({icon, alt}: IconDisplayProps) {
            return (
                <div className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-300 rounded-2xl">
                    <img src={icon} alt={alt}/>
                </div>)
        }

        return (
            <Card className="h-[100vh] flex flex-col max-w-[5rem] p-4 gap-6 shadow-xl shadow-blue-gray-900/5 items-center">
                <img src="/menu.svg" alt="Open menu" className="justify-end" onClick={() => setIsOpen(true)} />
                <img src="/dice.svg" alt="dice" className="w-8 h-8" />
                <List className="gap-6">
                    <ListItem>
                        <NavLink to={"/"} aria-current="page">
                            <IconDisplay icon="/home.svg" alt="home"/>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to={"/campaigns"} aria-current="page">
                            <IconDisplay icon="/campaign.svg" alt="campaign"/>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to={"/characters"} aria-current="page">
                            <IconDisplay icon="/characters.svg" alt="characters"/>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to={"/npcs"} aria-current="page">
                            <IconDisplay icon="/npcs.svg" alt="NPCS"/>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to={"/spells"} aria-current="page">
                            <IconDisplay icon="/spells.svg" alt="spells"/>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to={"/medias"} aria-current="page">
                            <IconDisplay icon="/medias.svg" alt="medias"/>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to={"/notes"} aria-current="page">
                            <IconDisplay icon="/notes.svg" alt="notes"/>
                        </NavLink>
                    </ListItem>
                </List>
            </Card>
        )
    }
}