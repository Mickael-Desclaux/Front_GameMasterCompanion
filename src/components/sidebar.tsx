import {Card, Chip, List, ListItem, ListItemPrefix, ListItemSuffix, Typography} from "@material-tailwind/react";

export default function Sidebar() {

    return (
        <Card className="h-[100vh] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                    Sidebar
                </Typography>
            </div>
            <List className="gap-6">
                <ListItem>
                    Accueil
                </ListItem>
                <ListItem>
                    Campagnes
                </ListItem>
                <ListItem>
                    Chapitres
                </ListItem>
                <ListItem>
                    Personnages
                </ListItem>
                <ListItem>
                    PNJ
                </ListItem>
                <ListItem>
                    Sorts
                </ListItem>
                <ListItem>
                    Medias
                </ListItem>
                <ListItem>
                    Notes
                </ListItem>
            </List>
        </Card>
    );
}