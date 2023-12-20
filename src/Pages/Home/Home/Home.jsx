import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import JustForYou from "../JustForYou/JustForYou";

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <Helmet>
            <title>Mesh | Home</title>
        </Helmet>
        <JustForYou></JustForYou>
            <p>This is home</p>            
        </>
    );
};

export default Home;