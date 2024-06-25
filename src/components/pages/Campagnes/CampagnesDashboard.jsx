import classes from "./CampagnesDashboard.module.scss";
import { useState } from "react";

function CampagnesDashboard() {
  // TOGGLE formCard visibility form Campagnes
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleAddContentClick = (e) => {
    e.preventDefault();
    setIsFormVisible(!isFormVisible);
  };
  // TOGGLE formCard visibility form Campagnes END

  return (
    <>
      <section className={`${classes.CampagnesDashboard}`}>
        <h2>Campagnes</h2>

        <form>
          <div className={`${classes.buttons}`}>
            <button onClick={handleAddContentClick}>Ajouter contenu</button>
            <button>Modifier</button>
            <button>Supprimer</button>
          </div>

          {isFormVisible && (
            <section className={`${classes.formCard}`}>
              <h3>Ajouter une campagne</h3>

              <label htmlFor="ID-Campagne">ID Campagne:</label>
              <input type="text" />

              <label htmlFor="startDate">Date de Début:</label>
              <input type="date" />

              <label htmlFor="endDate">Date de Fin::</label>
              <input type="date" />

              <label htmlFor="url-image">URL Image:</label>
              <input type="text" />

              <button type="submit">Enregistrer</button>
            </section>
          )}

          <table>
            <thead>
              <tr>
                <th>ID Campagne</th>
                <th>Date de Début</th>
                <th>Date de Fin</th>
                <th>URL Image</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody id="campagnesfilledDataTable">
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

export default CampagnesDashboard;
