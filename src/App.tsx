import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "@/pages/home.tsx";
import Sidebar from "@/components/sidebar.tsx";
import Dice from "@/components/dice.tsx";

export default function App() {

    return(
        <>
            <div className="flex min-h-screen">
                <Sidebar />
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                    <div className="fixed bottom-2 right-2">
                        <Dice />
                    </div>
                </div>
            </div>
        </>
    )
}
