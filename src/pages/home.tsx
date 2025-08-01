import CampaignResume from "@/components/campaignResume.tsx";
import CharacterResume from "@/components/characterResume.tsx";
import NoteResume from "@/components/noteResume.tsx";
import SpellResume from "@/components/spellResume.tsx";
import NPCResume from "@/components/npcResume.tsx";

export default function HomePage() {

    return (
        <div className="flex flex-col w-full justify-center">
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 m-2 border-2 border-gray-200 rounded-lg p-4">
                    <CampaignResume />
                </div>
                <div className="lg:w-1/2 m-2 border-2 border-gray-200 rounded-lg p-4">
                    <CharacterResume />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 m-2 border-2 border-gray-200 rounded-lg p-4">
                    <NPCResume />
                </div>
                <div className="lg:w-1/3 m-2 border-2 border-gray-200 rounded-lg p-4">
                    <SpellResume />
                </div>
                <div className="lg:w-1/3 m-2 border-2 border-gray-200 rounded-lg p-4">
                    <NoteResume />
                </div>
            </div>
        </div>
    )
}