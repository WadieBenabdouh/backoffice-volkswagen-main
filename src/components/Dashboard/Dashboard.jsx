import classes from "./Dashboard.module.scss";
import MediasDashboard from "../pages/Medias/MediaDasboard";
import CommerciauxDashboard from "../pages/Commerciaux/CommerciauxDashboard";
import CampagnesDashboard from "../pages/Campagnes/CampagnesDashboard";
import LeadsDashboard from "../pages//Leads/LeadsDashboard";

import { useState } from "react";

function Dashboard() {
  // TOGGLE PAGES APPEARANCE USIN useState hook
  const [currentView, setCurrentView] = useState("Medias");

  const renderView = () => {
    switch (currentView) {
      case "Medias":
        return <MediasDashboard />;
      case "Commerciaux":
        return <CommerciauxDashboard />;
      case "Campagnes":
        return <CampagnesDashboard />;
      case "Leads":
        return <LeadsDashboard />;
      default:
        return <MediasDashboard />;
    }
  };

  return (
    <>
      {/* HEADER */}
      <header>
        <h1 className={`${classes.backoffice_Heading}`}>
          Backoffice Volkswagen
        </h1>
      </header>
      {/* HEADER END*/}

      <main>
        {/* SIDEBAR */}
        <section className={`${classes.sidebar}`}>
          <nav>
            <ul>
              <li>
                <a href="#" onClick={() => setCurrentView("Medias")}>
                  Médias
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setCurrentView("Commerciaux")}>
                  Commerciaux
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setCurrentView("Campagnes")}>
                  Campagnes
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setCurrentView("Leads")}>
                  Leads
                </a>
              </li>
            </ul>
          </nav>
        </section>
        {/* SIDEBAR END */}

        {/* SELECTED PAGE AS COMPONENT- 4/4*/}
        <section className={`${classes.rightPanel}`}>{renderView()}</section>
        {/* SELECTED PAGE AS COMPONENT - 4/4 END*/}
      </main>
    </>
  );
}

export default Dashboard;
