import { Routes, Route, BrowserRouter } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Partspage from "./pages/Partspage";
import App from './App'


export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<App/>} />
            <Route path={"/mainpage"} element={<Mainpage/>} />
            <Route path={"/partspage"} element={<Partspage/>} />
            <Route path={"/partspage/game"} element={<Partspage/>} />
        </Routes>
        </BrowserRouter>
    );

}
