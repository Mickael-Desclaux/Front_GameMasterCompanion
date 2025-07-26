import {shortenedText} from "@/utils/misc.ts";
import {NavLink} from "react-router-dom";
import {lastNote} from "@/fakeData/data.ts";

export default function NoteResume() {

    return (
        <NavLink to={`/notes/${lastNote.id}`}>
            <div className="text-balance w-full h-full">
                <h3 className="font-bold text-2xl mb-2 -mt-1">{lastNote.title}</h3>
                <p className="text-sm">{shortenedText(lastNote.description, 400)}</p>
            </div>
        </NavLink>
    )
}