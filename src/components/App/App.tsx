import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hook';
import { TOKEN } from '../../utils/config';
import { fetchAccountInfo } from '../../store/slice/accountInfoSlice';
import { Routes, Route } from "react-router-dom";

import { Layout } from "../Layout/Layout";
import { Homepage } from "../../pages/Homepage/Homepage";
import { Loginpage } from "../../pages/Loginpage/Loginpage";
import { Searchpage } from "../../pages/Searchpage/Searchpage";

export const App: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (TOKEN !== null) dispatch(fetchAccountInfo(TOKEN));
    }, [dispatch])

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="/login" element={<Loginpage />} />
                    <Route path="/search" element={<Searchpage />} />
                </Route>
            </Routes>
        </>
    )
}