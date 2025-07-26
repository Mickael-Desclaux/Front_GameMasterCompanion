import {NavLink} from "react-router-dom";
import {shortenedText} from "@/utils/misc.ts";
import {lastNPC} from "@/fakeData/data.ts";

export default function NPCResume() {

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