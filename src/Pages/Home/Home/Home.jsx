import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Logo from "../Logo/Logo";
import About from "../About/About";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Asset Management || Home</title>
            </Helmet>
            <Banner></Banner>
            <Logo></Logo>
            <About></About>
        </div>
    );
};

export default Home;