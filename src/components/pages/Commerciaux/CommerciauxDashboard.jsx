import classes from "./Commerciaux.module.scss";
import { useState } from "react";

function CommerciauxDashboard() {
  // TOGGLE formCard visibility form Commerciaux
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleAddContentClick = (e) => {
    e.preventDefault();
    setIsFormVisible(!isFormVisible);
  };
  // TOGGLE formCard visibility form Commerciaux END

  return (
    <>
      <section className={`${classes.CommerciauxDashboard}`}>
        <h2>Commerciaux</h2>

        <form>
          <div className={`${classes.buttons}`}>
            <button onClick={handleAddContentClick}>Ajouter contenu</button>
            <button>Modifier</button>
            <button>Supprimer</button>
          </div>

          {isFormVisible && (
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
          )}

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

            <tbody id="commerciauxfilledDataTable">
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
