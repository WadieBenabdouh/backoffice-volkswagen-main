import classes from "./CampagnesDashboard.module.scss";

function CampagnesDashboard() {
  return (
    <>
      <section className={`${classes.CampagnesDashboard}`}>
        <h2>Campagnes</h2>

        <form>
          <div className={`${classes.buttons}`}>
            <button>Ajouter contenu</button>
            <button>Modifier</button>
            <button>Supprimer</button>
          </div>

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

            <tbody id="commerciaux-filledDataTable">
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
