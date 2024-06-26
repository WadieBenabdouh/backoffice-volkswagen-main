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

  // formCard inputs logging
  const [formData, setFormData] = useState({
    campagneID: "",
    startDate: "",
    endDate: "",
    urlImageCampagne: "",
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
      campagneID: "",
      startDate: "",
      endDate: "",
      urlImageCampagne: "",
    });
  };
  // formCard inputs logging END

  return (
    <>
      <section className={`${classes.CampagnesDashboard}`}>
        <h2>Campagnes</h2>

        <form onSubmit={handleFormSubmit}>
          <div className={`${classes.buttons}`}>
            <button onClick={handleAddContentClick}>Ajouter contenu</button>
            <button>Modifier</button>
            <button>Supprimer</button>
          </div>

          {isFormVisible && (
            <section className={`${classes.formCard}`}>
              <h3>Ajouter une campagne</h3>

              <label htmlFor="campagneID">ID Campagne:</label>
              <input
                id="campagneID"
                name="campagneID"
                value={formData.campagneID}
                onChange={handleInputChange}
                type="text"
              />

              <label htmlFor="startDate">Date de Début:</label>
              <input
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                type="date"
              />

              <label htmlFor="endDate">Date de Fin:</label>
              <input
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                type="date"
              />

              <label htmlFor="urlImageCampagne">URL Image:</label>
              <input
                id="urlImageCampagne"
                name="urlImageCampagne"
                value={formData.urlImageCampagne}
                onChange={handleInputChange}
                type="text"
              />

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
              {tableData.map((data, index) => (
                <tr key={{ index }}>
                  <td>{data.campagneID}</td>
                  <td>{data.startDate}</td>
                  <td>{data.endDate}</td>
                  <td>{data.urlImageCampagne}</td>
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

export default CampagnesDashboard;
