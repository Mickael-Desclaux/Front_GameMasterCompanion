import { Card, List, ListItem, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import {useEffect, useState} from "react";

type IconDisplayProps = {
    icon: string;
    alt: string;
};

function IconDisplay({ icon, alt }: IconDisplayProps) {
    return (
        <div className="w-10 h-10 flex items-center justify-center delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-300 rounded-full">
            <img src={icon} alt={alt} className="w-8 h-8" />
        </div>
    );
}

type NavItem = {
    to: string;
    label: string;
    icon: string;
    alt: string;
};

const navItems: NavItem[] = [
    { to: "/", label: "Accueil", icon: "/home.svg", alt: "home" },
    { to: "/campaigns", label: "Campagnes", icon: "/campaign.svg", alt: "campaigns" },
    { to: "/characters", label: "Personnages", icon: "/characters.svg", alt: "characters" },
    { to: "/npcs", label: "PNJ", icon: "/npcs.svg", alt: "npcs" },
    { to: "/spells", label: "Sorts", icon: "/spells.svg", alt: "spells" },
    { to: "/medias", label: "Medias", icon: "/medias.svg", alt: "medias" },
    { to: "/notes", label: "Notes", icon: "/notes.svg", alt: "notes" },
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile) {
        return (
            <>
                {!isOpen && (
                    <div className="fixed top-4 left-4 z-50">
                        <img
                            src="/menu.svg"
                            alt="Open menu"
                            className="w-8 h-8 cursor-pointer bg-white rounded-lg shadow-lg p-1"
                            onClick={() => setIsOpen(true)}
                        />
                    </div>
                )}

                {isOpen && (
                    <div className="fixed inset-0 z-40 bg-white">
                        <Card className="h-full w-full p-4 shadow-none bg-white">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center">
                                    <img src="/dice.svg" alt="dice" className="w-8 h-8 mr-3" />
                                    <Typography
                                        variant="h5"
                                        color="blue-gray"
                                        className="whitespace-nowrap"
                                    >
                                        Game Master Companion
                                    </Typography>
                                </div>
                                <img
                                    src="/close.svg"
                                    alt="Close menu"
                                    className="w-8 h-8 cursor-pointer"
                                    onClick={() => setIsOpen(false)}
                                />
                            </div>

                            <List className="gap-4">
                                {navItems.map(({ to, label, icon, alt }) => (
                                    <ListItem key={to} className="p-0">
                                        <NavLink
                                            to={to}
                                            aria-current="page"
                                            className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <div className="mr-4">
                                                <IconDisplay icon={icon} alt={alt} />
                                            </div>
                                            <span className="text-base font-medium">{label}</span>
                                        </NavLink>
                                    </ListItem>
                                ))}
                            </List>
                        </Card>
                    </div>
                )}
            </>
        )
    } else return (
        <Card
            className={`flex min-h-screen flex-col transition-[width] duration-300 ease-in-out p-4 shadow-xl shadow-blue-gray-900/5 ${
                isOpen ? "w-[20rem] items-start" : "w-[5rem] items-center"
            }`}
        >
            <div className={`flex ${isOpen ? "justify-end" : "justify-center"} w-full mb-2`}>
                <img
                    src={isOpen ? "/close.svg" : "/menu.svg"}
                    alt={isOpen ? "Close menu" : "Open menu"}
                    className="w-8 h-8 cursor-pointer"
                    onClick={() => setIsOpen((prev) => !prev)}
                />
            </div>

            <div className="relative flex items-center">
                <img src="/dice.svg" alt="dice" className="w-8 h-8 mt-2 mb-2" />
                <div
                    className={`absolute left-full top-1/2 transform -translate-y-1/2 ps-2 transition-all ease-in-out ${
                        isOpen
                            ? "duration-300 opacity-100 translate-x-0"
                            : "hidden opacity-0 translate-x-2 pointer-events-none"
                    }`}
                >
                    <Typography
                        variant="h5"
                        color="blue-gray"
                        className="whitespace-nowrap"
                    >
                        Game Master Companion
                    </Typography>
                </div>
            </div>

            <List className="gap-4">
                {navItems.map(({ to, label, icon, alt }) => (
                    <ListItem key={to} className="p-0">
                        <NavLink
                            to={to}
                            aria-current="page"
                            className="flex justify-start items-start"
                        >
                            {isOpen ? (
                                <span className="ps-4">{label}</span>
                            ) : (
                                <div className="flex justify-center">
                                    <IconDisplay icon={icon} alt={alt} />
                                </div>
                            )}
                        </NavLink>
                    </ListItem>

                ))}
            </List>
        </Card>
    )
}
