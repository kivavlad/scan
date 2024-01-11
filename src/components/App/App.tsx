import { Routes, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Homepage } from "../../pages/Homepage/Homepage";
import { Loginpage } from "../../pages/Loginpage/Loginpage";

export const App: React.FC = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="/login" element={<Loginpage />} />
                </Route>
            </Routes>
        </>
    )
}