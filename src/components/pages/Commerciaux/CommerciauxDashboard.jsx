import classes from "./Commerciaux.module.scss";
import { useState, useEffect } from "react";
// FIREBASE x FIRESTORE IMPORTS
import { collection, getDocs, addDoc } from "firebase/firestore";
import firestore from "../../../../firebase";

function CommerciauxDashboard() {
  // TOGGLE formCard visibility form Commerciaux
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleAddContentClick = (e) => {
    e.preventDefault();
    setIsFormVisible(!isFormVisible);
  };
  // TOGGLE formCard visibility form Commerciaux END

  // formCard inputs logging
  const [formData, setFormData] = useState({
    city: "",
    concession: "",
    lastName: "",
    firstName: "",
    mailChef: "",
  });
  const [tableData, setTableData] = useState([]);

  // --useEffect for firestore
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestore, "commerciaux"));
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
      await addDoc(collection(firestore, "commerciaux"), formData);
      setFormData({
        city: "",
        concession: "",
        lastName: "",
        firstName: "",
        mailChef: ""
      });

      const querySnapshot = await getDocs(collection(firestore, "commerciaux"));
      setTableData(querySnapshot.docs.map((doc) => doc.data()));
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    setTableData((prevData) => [...prevData, formData]);
    setFormData({
      city: "",
      concession: "",
      lastName: "",
      firstName: "",
      mailChef: ""
    });
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
      <section className={`${classes.CommerciauxDashboard}`}>
        <h2>Commerciaux</h2>

        <form onSubmit={handleFormSubmit}>
          <div className={`${classes.buttons}`}>
            <button onClick={handleAddContentClick}>Ajouter contenu</button>
            <button onClick={handleModifyClick}>Modifier</button>
            <button onClick={handleDeleteClick}>Supprimer</button>
          </div>

          {isFormVisible && (
            <section className={`${classes.formCard}`}>
              <h3>Ajouter un commercial</h3>

              <label htmlFor="city">Villes:</label>
              <input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                type="text"
              />

              <label htmlFor="concession">Concession:</label>
              <input
                id="concessions"
                name="concession"
                value={formData.concession}
                onChange={handleInputChange}
                type="text"
              />

              <label htmlFor="lastName">Nom:</label>
              <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                type="text"
              />

              <label htmlFor="firstName">Prénom:</label>
              <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                type="text"
              />

              <label htmlFor="mailChef">Mail Chef de Ventes:</label>
              <input
                id="mailChef"
                name="mailChef"
                value={formData.mailChef}
                onChange={handleInputChange}
                type="email"
              />

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
              {tableData.map((data, index) => (
                <tr key={{ index }}>
                  <td>{data.city}</td>
                  <td>{data.concession}</td>
                  <td>{data.lastName}</td>
                  <td>{data.firstName}</td>
                  <td>{data.mailChef}</td>
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

export default CommerciauxDashboard;
