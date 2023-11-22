import { Routes, Route } from "react-router"
import Home from "../pages/index"
import SearchPage  from "../pages/SearchPage"
import UserView from "../pages/UserView"
import {Carousel} from "../components/Carousel/Carousel";
import PropertyDetail from "../components/PropertyDetail/PropertyDetail";

export const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/searchpage" element={<SearchPage/>}/>
            <Route path="/userview" element={<UserView/>}/>
            <Route path="/property/:id" element={<PropertyDetail/>} />
            <Route path="/property" element={<Carousel/>} />
        </Routes>
    )
}