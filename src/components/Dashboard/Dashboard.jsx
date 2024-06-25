import classes from "./Dashboard.module.scss";
import MediasDashboard from "../pages/Medias/MediaDasboard";
import CommerciauxDashboard from "../pages/Commerciaux/CommerciauxDashboard";
import CampagnesDashboard from "../pages/Campagnes/CampagnesDashboard";
import LeadsDashboard from "../pages//Leads/LeadsDashboard";





function Dashboard() {
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
                <a href="\">Médias</a>
              </li>
              <li>
                <a href="\">Commerciaux</a>
              </li>
              <li>
                <a href="\">Campagnes</a>
              </li>
              <li>
                <a href="\">Leads</a>
              </li>
            </ul>
          </nav>
        </section>
        {/* SIDEBAR END */}

        {/* SELECTED PAGE AS COMPONENT- 4/4*/}
        <section className={`${classes.rightPanel}`}>
          {/* <MediasDashboard /> */}
          {/* <CommerciauxDashboard /> */}
          {/* <CampagnesDashboard /> */}
          <LeadsDashboard/>
        </section>

        {/* SELECTED PAGE AS COMPONENT - 4/4 END*/}
      </main>
    </>
  );
}

export default Dashboard;
