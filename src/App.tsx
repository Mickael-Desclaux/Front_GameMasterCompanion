import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "@/pages/home.tsx";
import Sidebar from "@/components/sidebar.tsx";

export default function App() {

    return(
        <>
            <div className="flex min-h-screen overflow-x-hidden">
                <div className="hidden lg:block">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}
