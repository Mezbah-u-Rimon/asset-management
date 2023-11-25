import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Logo from "../Logo/Logo";
import About from "../About/About";
import Packages from "../Packages/Packages";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Asset Management || Home</title>
            </Helmet>
            <Banner></Banner>
            <Logo></Logo>
            <About></About>
            <Packages></Packages>
        </div>
    );
};

export default Home;