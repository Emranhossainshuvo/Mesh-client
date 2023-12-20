import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import JustForYou from "../JustForYou/JustForYou";
import WeProvide from "../WeProvide/WeProvide";
import BestSell from "../BestSell/BestSell";
import Highlighted from "./Highlighted/Highlighted";

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <Helmet>
            <title>Mesh | Home</title>
        </Helmet>
        <WeProvide></WeProvide>
        <JustForYou></JustForYou>
        <Highlighted></Highlighted>
        <BestSell></BestSell>

            <p>This is home</p>            
        </>
    );
};

export default Home;