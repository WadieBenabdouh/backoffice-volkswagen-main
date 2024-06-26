import classes from "./LeadsDashboard.module.scss";
import { useState, useEffect } from "react";
// FIREBASE x FIRESTORE IMPORTS
import { collection, getDocs, addDoc } from "firebase/firestore";
import firestore from "../../../../firebase";

function LeadsDashboard() {
  // TOGGLE formCard visibility form Leads
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleAddContentClick = (e) => {
    e.preventDefault();
    setIsFormVisible(!isFormVisible);
  };
  // TOGGLE formCard visibility form Leads END

  // formCard inputs logging
  const [formData, setFormData] = useState({
    phoneNumber: "",
    lastNameLeads: "",
    firstNameLeads: "",
    desiredModel: ""
  });
  const [tableData, setTableData] = useState([]);

  // --useEffect for firestore
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestore, "leads"));
      const data = querySnapshot.docs.map((doc) => doc.data());
      setTableData(data);
    };
    fetchData();
  }, []);

  // --useEffect for firestore end

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(firestore, "leads"), formData);
      setFormData({
        phoneNumber: "",
        lastNameLeads: "",
        firstNameLeads: "",
        desiredModel: ""
      });

      const querySnapshot = await getDocs(collection(firestore, "leads"));
      setTableData(querySnapshot.docs.map((doc) => doc.data()));
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  // formCard inputs logging END

    // MODIFY x DELETE BUTTONS
    const handleModifyClick = (e) => {
      e.preventDefault();
      console.log("Modify action triggered");
      //>> Implement modify logic here
    };
  
    const handleDeleteClick = (e) => {
      e.preventDefault();
      console.log("Delete action triggered");
      //>> Implement delete logic here
    };
    // MODIFY x DELETE BUTTONS END

  return (
    <>
      <section className={`${classes.LeadsDashboard}`}>
        <h2>Leads</h2>

        <form onSubmit={handleFormSubmit}>
          <div className={`${classes.buttons}`}>
            <button onClick={handleAddContentClick}>Ajouter contenu</button>
            <button onClick={handleModifyClick}>Modifier</button>
            <button onClick={handleDeleteClick}>Supprimer</button>
          </div>

          {isFormVisible && (
            <section className={`${classes.formCard}`}>
              <h3>Ajouter un lead</h3>

              <label htmlFor="phoneNumber">Numéro de Téléphone:</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                type="number"
              />

              <label htmlFor="lastNameLeads">Nom:</label>
              <input
                id="lastNameLeads"
                name="lastNameLeads"
                value={formData.lastNameLeads}
                onChange={handleInputChange}
                type="text"
              />

              <label htmlFor="firstNameLeads">Prénom:</label>
              <input
                id="firstNameLeads"
                name="firstNameLeads"
                value={formData.firstNameLeads}
                onChange={handleInputChange}
                type="text"
              />

              <label htmlFor="desiredModel">Modèle Souhaité:</label>
              <input
                id="desiredModel"
                name="desiredModel"
                value={formData.desiredModel}
                onChange={handleInputChange}
                type="text"
              />

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
              {tableData.map((data, index) => (
                <tr key={{ index }}>
                  <td>{data.phoneNumber}</td>
                  <td>{data.lastNameLeads}</td>
                  <td>{data.firstNameLeads}</td>
                  <td>{data.desiredModel}</td>
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

export default LeadsDashboard;
