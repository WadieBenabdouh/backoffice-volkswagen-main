import classes from "./MediasDashboard.module.scss";

function MediasDashboard() {
  return (
    <>
      <section className={`${classes.MediasDashboard}`}>
        <h2>Médias</h2>

        <form>
          <div className={`${classes.buttons}`}>
            <button>Ajouter contenu</button>
            <button>Modifier</button>
            <button>Supprimer</button>
          </div>

          <table>
            <thead>
            <tr>
                <th>ID Modèle</th>
                <th>Nom du Modèle</th>
                <th>URL Image 1</th>
                <th>URL Image 2</th>
                <th>URL Image 3</th>
                <th>URL Brochure</th>
                <th>Actions</th>
            </tr>
            </thead>

            <tbody id="filledDataTable">
                <tr>
                    <th>test</th>
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

export default MediasDashboard;
