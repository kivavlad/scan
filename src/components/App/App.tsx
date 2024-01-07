import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Homepage } from "../../pages/Homepage/Homepage";

export const App: React.FC = () => {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout isLogged={isLogged} setIsLogged={setIsLogged} />}>
                    <Route index element={<Homepage />} />
                </Route>
            </Routes>
        </>
    )
}