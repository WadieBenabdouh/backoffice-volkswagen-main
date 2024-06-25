import classes from "./Commerciaux.module.scss";

function CommerciauxDashboard() {
  return (
    <>
      <section className={`${classes.CommerciauxDashboard}`}>
        <h2>Commerciaux</h2>

        <form>
          <div className={`${classes.buttons}`}>
            <button>Ajouter contenu</button>
            <button>Modifier</button>
            <button>Supprimer</button>
          </div>

          <section className={`${classes.formCard}`}>
            <h3>Ajouter un commercial</h3>

            <label htmlFor="city">Villes:</label>
            <input type="text" />

            <label htmlFor="concession">Concession:</label>
            <input type="text" />

            <label htmlFor="lastName">Nom:</label>
            <input type="text" />

            <label htmlFor="firstName">Prénom:</label>
            <input type="text" />

            <label htmlFor="mailChef">Mail Chef de Ventes:</label>
            <input type="text" />

            <button type="submit">Enregistrer</button>
          </section>

          <table>
            <thead>
              <tr>
                <th>Villes</th>
                <th>Concession</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Mail Chef de Ventes</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody id="commerciaux-filledDataTable">
              <tr>
                <th>test</th>
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

export default CommerciauxDashboard;
