import { Routes, Route, BrowserRouter } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Partspage from "./pages/Partspage";
import App from './App'
import PartspageGame1 from "./pages/PartspageGames/PartspageGame1";
import PartspageGame2 from "./pages/PartspageGames/PartspageGame2";
import PartspageGame3 from "./pages/PartspageGames/PartspageGame3";

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<App/>} />
            <Route path={"/mainpage"} element={<Mainpage/>} />
            <Route path={"/partspage"} element={<Partspage/>} />
            <Route path={"/partspage/game"} element={<PartspageGame1/>} />
            <Route path={"/partspage/game2"} element={<PartspageGame2/>} />
            <Route path={"/partspage/game3"} element={<PartspageGame3/>} />
        </Routes>
        </BrowserRouter>
    );

}
