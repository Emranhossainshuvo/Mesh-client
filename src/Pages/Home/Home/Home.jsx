import { Helmet } from "react-helmet-async";
import Navbar from "../../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <>
        <Navbar></Navbar>
        <Banner></Banner>
        <Helmet>
            <title>Mesh | Home</title>
        </Helmet>
            <p>This is home</p>            
        </>
    );
};

export default Home;