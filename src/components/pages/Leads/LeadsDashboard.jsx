import classes from "./LeadsDashboard.module.scss";
import { useState } from "react";

function LeadsDashboard() {
  // TOGGLE formCard visibility form Leads
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleAddContentClick = (e) => {
    e.preventDefault();
    setIsFormVisible(!isFormVisible);
  };
  // TOGGLE formCard visibility form Leads END

  return (
    <>
      <section className={`${classes.LeadsDashboard}`}>
        <h2>Leads</h2>

        <form>
          <div className={`${classes.buttons}`}>
            <button onClick={handleAddContentClick}>Ajouter contenu</button>
            <button>Modifier</button>
            <button>Supprimer</button>
          </div>

          {isFormVisible && (
            <section className={`${classes.formCard}`}>
              <h3>Ajouter un lead</h3>

              <label htmlFor="phone-number">Numéro de Téléphone:</label>
              <input type="number" />

              <label htmlFor="lastName">Nom:</label>
              <input type="text" />

              <label htmlFor="firstName">Prénom:</label>
              <input type="text" />

              <label htmlFor="desiredModel">Modèle Souhaité:</label>
              <input type="text" />

              <button type="submit">Enregistrer</button>
            </section>
          )}

          <table>
            <thead>
              <tr>
                <th>Numéro de Téléphone</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Modèle Souhaité</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody id="leadsfilledDataTable">
              <tr>
                <th>test</th>
                <th>test</th>
                <th>test</th>
                <th>test</th>
                <th>ACTION BUTTON</th>
              </tr>
            </tbody>
          </table>
        </form>
      </section>
    </>
  );
}

export default LeadsDashboard;
