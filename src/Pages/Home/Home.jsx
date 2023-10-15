import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div className="font-bold text-center font-rancho ">
            <Banner></Banner>
            <Features></Features>
            <Products></Products>
        </div>
    );
};

export default Home;