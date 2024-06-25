import classes from "./MediasDashboard.module.scss";
import { useState } from "react";

function MediasDashboard() {
  // TOGGLE formCard visibility form Medias
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleAddContentClick = (e) => {
    e.preventDefault();
    setIsFormVisible(!isFormVisible);
  };
  // TOGGLE formCard visibility form Medias END

  // formCard inputs logging
  const [formData, setFormData] = useState({
    modelID: "",
    modelName: "",
    urlOne: "",
    urlTwo: "",
    urlThree: "",
    urlBrochure: "",
  });
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTableData((prevData) => [...prevData, formData]);
    setFormData({
      modelID: "",
      modelName: "",
      urlOne: "",
      urlTwo: "",
      urlThree: "",
      urlBrochure: "",
    });
  };
  // formCard inputs logging END

  return (
    <>
      <section className={`${classes.MediasDashboard}`}>
        <h2>Médias</h2>

        <form onSubmit={handleFormSubmit}>
          <div className={`${classes.buttons}`}>
            <button onClick={handleAddContentClick}>Ajouter contenu</button>
            <button>Modifier</button>
            <button>Supprimer</button>
          </div>

          {isFormVisible && (
            <section className={`${classes.formCard}`}>
              <h3>Ajouter un média</h3>

              <label htmlFor="ModelID">ID Modèle:</label>
              <input
                type="text"
                id="ModelID"
                name="modelID"
                value={formData.modelID}
                onChange={handleInputChange}
              />

              <label htmlFor="ModelName">Nom du Modèle:</label>
              <input
                type="text"
                id="ModelName"
                name="modelName"
                value={formData.modelName}
                onChange={handleInputChange}
              />

              <label htmlFor="urlOne">URL Image 1:</label>
              <input
                type="text"
                id="URL-one"
                name="urlOne"
                value={formData.urlOne}
                onChange={handleInputChange}
              />

              <label htmlFor="urlTwo">URL Image 2:</label>
              <input
                type="text"
                id="URL-two"
                name="urlTwo"
                value={formData.urlTwo}
                onChange={handleInputChange}
              />

              <label htmlFor="urlThree">URL Image 3:</label>
              <input
                type="text"
                id="URL-three"
                name="urlThree"
                value={formData.urlThree}
                onChange={handleInputChange}
              />

              <label htmlFor="urlBrochure">URL Brochure:</label>
              <input
                type="text"
                id="URL-brochure"
                name="urlBrochure"
                value={formData.urlBrochure}
                onChange={handleInputChange}
              />

              <button type="submit">Enregistrer</button>
            </section>
          )}

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

            <tbody id="mediasfilledDataTable">
              {tableData.map((data, index) => (
                <tr key={{ index }}>
                  <td>{data.modelID}</td>
                  <td>{data.modelName}</td>
                  <td>{data.urlOne}</td>
                  <td>{data.urlTwo}</td>
                  <td>{data.urlThree}</td>
                  <td>{data.urlBrochure}</td>
                  <th>ACTION BUTTON</th>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </section>
    </>
  );
}

export default MediasDashboard;
