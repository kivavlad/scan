import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hook';
import { checkAccessToken, logOut } from '../../store/slice/authorizationSlice';
import { Routes, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Homepage } from "../../pages/Homepage/Homepage";
import { Loginpage } from "../../pages/Loginpage/Loginpage";
import { Searchpage } from "../../pages/Searchpage/Searchpage";
import { Resultpage } from '../../pages/Resultpage/Resultpage';
import { Notfoundpage } from '../../pages/Notfoundpage/Notfoundpage';

export const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const isLogged = useAppSelector((state) => state.auth.isLogged);

    useEffect(() => {
        dispatch(checkAccessToken());
        if (!isLogged) dispatch(logOut());
    }, [dispatch, isLogged])

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="/login" element={<Loginpage />} />
                    {isLogged && <Route path="/search" element={<Searchpage />} />}
                    {isLogged && <Route path="/results" element={<Resultpage />} />}
                    <Route path='*' element={<Notfoundpage />} />
                </Route>
            </Routes>
        </>
    )
}