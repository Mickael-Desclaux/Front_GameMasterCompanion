import type {LastNote} from "@/types/notes.ts";
import {shortenedText} from "@/utils/misc.ts";
import {NavLink} from "react-router-dom";

export default function NoteResume() {

    const lastNote: LastNote = {
        id: 1,
        title: "Exploration du donjon",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere metus quis erat lacinia, " +
            "ut dictum mi euismod. Nam justo arcu, pharetra at nibh eu, porta viverra dolor. Nunc velit neque, varius id eros " +
            "eu, sagittis posuere augue. Maecenas euismod quis arcu vitae tincidunt. Nunc placerat fermentum odio vitae " +
            "dictum. Quisque fringilla est non tortor faucibus rhoncus. Aliquam in ullamcorper nulla. In ut mauris vel " +
            "urna ultrices ultrices. ut dictum mi euismod. Nam justo arcu, pharetra at nibh eu, porta viverra dolor. Nunc velit neque, varius id eros" +
            "ut dictum mi euismod. Nam justo arcu, pharetra at nibh eu, porta viverra dolor. Nunc velit neque, varius id eros" +
            "ut dictum mi euismod. Nam justo arcu, pharetra at nibh eu, porta viverra dolor. Nunc velit neque, varius id eros" +
            "ut dictum mi euismod. Nam justo arcu, pharetra at nibh eu, porta viverra dolor. Nunc velit neque, varius id eros" +
            "ut dictum mi euismod. Nam justo arcu, pharetra at nibh eu, porta viverra dolor. Nunc velit neque, varius id eros" +
            "ut dictum mi euismod. Nam justo arcu, pharetra at nibh eu, porta viverra dolor. Nunc velit neque, varius id eros",
    }

    return (
        <NavLink to={`/notes/${lastNote.id}`}>
            <div className="text-balance w-full h-full">
                <h3 className="font-bold text-2xl mb-2 -mt-1">{lastNote.title}</h3>
                <p className="text-sm">{shortenedText(lastNote.description, 400)}</p>
            </div>
        </NavLink>
    )
}