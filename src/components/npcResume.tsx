import {NavLink} from "react-router-dom";
import {shortenedText} from "@/utils/misc.ts";

export default function NPCResume() {

    const lastNPC = {
        id: 1,
        name: "Uther Gardecorbeau",
        role: "Chef de la porte de Baldur",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat elit ut tincidunt " +
            "consequat. Phasellus a magna leo. Integer blandit lorem nibh, quis feugiat ante iaculis id. Cras ut orci " +
            "vitae lectus fermentum scelerisque. Nulla et mauris in purus mollis convallis. Proin odio augue, ultricies " +
            "nec risus eget, tempus sagittis nibh. Nullam nibh libero, rutrum ac aliquet at, blandit at lacus. Phasellus " +
            "et risus risus. Fusce pulvinar a nisl a pretium. Fusce at diam ac arcu sollicitudin cursus ut ut sapien. " +
            "Duis ac tristique ligula. Suspendisse ipsum justo, eleifend nec pulvinar in, gravida ac sapien. Nunc a " +
            "velit non lorem consequat maximus eu et eros." +
            "Nunc quis mollis diam, et rutrum libero. Suspendisse accumsan neque a accumsan ultrices. Aliquam pretium " +
            "faucibus sem, a bibendum ipsum pellentesque a. Fusce vel justo a massa vulputate suscipit. Donec pellentesque " +
            "elementum ligula, nec luctus ante tincidunt ac. Duis lorem dui, condimentum ut volutpat eget, accumsan sed " +
            "elit. Vestibulum lacinia non mauris vel pretium. Curabitur auctor dolor eget neque faucibus, id tincidunt " +
            "tortor ullamcorper.",
    }

    return (
        <>
            <NavLink to={`/npcs/${lastNPC.id}`}>
                <div>
                    <h3 className="font-bold text-2xl mb-2 -mt-1">{lastNPC.name}</h3>
                    <h4 className="underline mb-2">{lastNPC.role}</h4>
                    <p className="text-sm text-balance">{shortenedText(lastNPC.description, 350)}</p>
                </div>
            </NavLink>
        </>
    )
}