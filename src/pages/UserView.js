import { Footer } from '../components/Footer/Footer';
import { NavBar } from "../components/NavBar/NavBar";
import { UserData } from '../components/UserData/UserData';

export default function UserView () {
    return (
        <>
            <NavBar/>
            <UserData/>
            <Footer/>
        </>
    )
}