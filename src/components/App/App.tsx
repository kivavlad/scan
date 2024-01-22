import { Routes, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Homepage } from "../../pages/Homepage/Homepage";
import { Loginpage } from "../../pages/Loginpage/Loginpage";
import { Searchpage } from "../../pages/Searchpage/Searchpage";
import { Resultpage } from '../../pages/Resultpage/Resultpage';

export const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="/login" element={<Loginpage />} />
                    <Route path="/search" element={<Searchpage />} />
                    <Route path="/results" element={<Resultpage />} />
                </Route>
            </Routes>
        </>
    )
}