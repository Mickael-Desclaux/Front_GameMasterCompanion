import CampaignResume from "@/components/campaignResume.tsx";
import CharacterResume from "@/components/characterResume.tsx";

export default function Home() {

    return (
        <div className="flex flex-col w-full h-full justify-center">
            <div className="flex flex-row w-full h-full">
                <div className="w-1/2 m-2 border-2 border-gray-200 rounded-lg p-8">
                    <CampaignResume />
                </div>
                <div className="w-1/2 m-2">
                    <CharacterResume />
                </div>
            </div>
            <div className="flex flex-row w-full h-full">
                <div className="w-1/3 m-2">
                    Dernier PNJ consulté
                </div>
                <div className="w-1/3 m-2">
                    Dernier sort consulté
                </div>
                <div className="w-1/3 m-2">
                    Dernier note consultée
                </div>
            </div>
        </div>
    )
}