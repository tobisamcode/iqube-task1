import React, { useState } from "react";
import "./App.css";
import Tabs from "./components/Tabs";
import BillingInfo from "./containers/BillingInfo";
import PersonalInfo from "./containers/PersonalInfo";
import PurchaseCompleted from "./containers/PurchaseCompleted";
import PurchaseInfo from "./containers/PurchaseInfo";

const App = () => {
    const [activeTab, setActiveTab] = useState("personalInfo");
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const handleNextClick = () => {
        if (activeTab === "personalInfo") {
            setActiveTab("billingInfo");
        }

        setCurrentPageIndex(currentPageIndex + 1);
        window.scrollTo(0, 0);
    };

    return ( <
        div className = "app-main" >
        <
        div >
        <
        a className = "btn-design"
        onClick = { handleNextClick } > { " " }
        Next Design & #8594;
        </a>
      </div>
      <div className= "slant-polygon" > < /div>{" "} <
        div className = "main-content container" > { " " } {
            currentPageIndex < 3 ? ( <
                div >
                <
                h3 className = "page-heading" > Complete Purchase < /h3>{" "} <
                Tabs activeTab = { activeTab }
                />{" "} {
                    currentPageIndex === 0 ? ( <
                        PersonalInfo / >
                    ) : currentPageIndex === 1 ? ( <
                        BillingInfo / >
                    ) : ( <
                        PurchaseInfo / >
                    )
                } { " " } <
                div className = "action-buttons" >
                <
                a className = "btn-gradient"
                onClick = { handleNextClick } > { " " } { currentPageIndex === 2 ? "Pay" : "Next" } { " " } <
                /a>{" "} <
                a className = "btn-plain" > Cancel Payment < /a>{" "} <
                /div>{" "} <
                /div>
            ) : ( <
                PurchaseCompleted / >
            )
        } { " " } <
        /div>{" "} <
        /div>
    );
};

export default App;