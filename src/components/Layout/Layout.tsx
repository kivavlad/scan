import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

type IProps = {
    isLogged: boolean;
    setIsLogged: any;
}

export const Layout: React.FC<IProps> = (props) => {

    return (
        <>
            <Header {...props} />
            <Outlet />
        </>
    )
}