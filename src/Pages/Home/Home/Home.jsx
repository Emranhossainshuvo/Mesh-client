import { Helmet } from "react-helmet-async";
import Navbar from "../../../Shared/Navbar/Navbar";

const Home = () => {
    return (
        <>
        <Navbar></Navbar>
        <Helmet>
            <title>Mesh | Home</title>
        </Helmet>
            <p>This is home</p>            
        </>
    );
};

export default Home;