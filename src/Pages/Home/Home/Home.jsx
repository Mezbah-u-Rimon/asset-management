import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Logo from "../Logo/Logo";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Asset Management || Home</title>
            </Helmet>
            <Banner></Banner>
            <Logo></Logo>
        </div>
    );
};

export default Home;