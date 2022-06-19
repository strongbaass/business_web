import React from "react";
import { FinanceTeam } from "./FinanceTeam";
import { Pricing } from "./Pricing";
import { ReviewInfo } from "./ReviewInfo";
import Solutions from "./Solutions";
import NavBar from "./UI/NavBar/NavBar";
import Services from "./UI/Services/Services";
import { Footer } from "./Footer";


const HomePage = () => {
    return(
        <div>
            <NavBar/>
            <Services/>
            <Solutions/>
            <FinanceTeam/>
            <Pricing/>
            <ReviewInfo/>
            <Footer/>
        </div>
    )
}

export default HomePage;