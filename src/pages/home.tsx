import CampaignResume from "@/components/campaignResume.tsx";
import CharacterResume from "@/components/characterResume.tsx";
import NoteResume from "@/components/noteResume.tsx";
import SpellResume from "@/components/spellResume.tsx";
import NPCResume from "@/components/npcResume.tsx";

export default function Home() {

    return (
        <div className="flex flex-col w-full h-full justify-center">
            <div className="flex flex-row w-full h-full">
                <div className="w-1/2 m-2 border-2 border-gray-200 rounded-lg p-8">
                    <CampaignResume />
                </div>
                <div className="w-1/2 m-2 border-2 border-gray-200 rounded-lg p-8">
                    <CharacterResume />
                </div>
            </div>
            <div className="flex flex-row w-full h-full">
                <div className="w-1/3 m-2 border-2 border-gray-200 rounded-lg p-8">
                    <NPCResume />
                </div>
                <div className="w-1/3 m-2 border-2 border-gray-200 rounded-lg p-8">
                    <SpellResume />
                </div>
                <div className="w-1/3 m-2 border-2 border-gray-200 rounded-lg p-8">
                    <NoteResume />
                </div>
            </div>
        </div>
    )
}