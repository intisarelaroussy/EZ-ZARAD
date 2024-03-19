import React, { useState } from 'react';
import axios from 'axios';

export default function Create() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        entreprise: '',
        region: '',
        ville: '',
        capitale: 0,
        R_B: '',
        E_M: false,
        done: false,
        Date_fin_livraison:'',});
    const handleSubmit =  async(e) => {
        e.preventDefault();
       try {
        setIsLoading(true);
        
        const response = await axios.post('/api/marches', formData);
        console.log(response.data);
    } catch(error) {
              console.log(error);
       }
       finally{
                setIsLoading(false);
       }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div>
            <nav className="navbar text-secondary justify-content-between">
                <h3>Nouveau Marché</h3>
            </nav>
            <div id="Prodouts">
                <h5 className="text-center">Créer Un Nouveau Marché</h5>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-1">
                                <label className="form-label">Nom Marché</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nomMarche"
                                    value={formData.nomMarche}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nom Entreprise</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nomEntreprise"
                                    value={formData.nomEntreprise}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Région</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="region"
                                    value={formData.region}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Ville</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="ville"
                                    value={formData.ville}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Capitale</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="capitale"
                                    value={formData.capitale}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <br></br>

                            <div className="mb-3">
                                <label className="form-label">Date finale de Livraison</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="dateLivraison"
                                    value={formData.dateLivraison}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3 ">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="reponseBanque"
                                    checked={formData.reponseBanque}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label">La Reponse de la Banque</label>
                            </div>
                            <div className="mb-3 ">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="enregistrerMarche"
                                    checked={formData.enregistrerMarche}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label">Enregistrer Marché</label>
                            </div>
                        </div>
                    </div>

                    <button
                    disabled={isLoading}
                    type="submit" id="btn" className="form-control">
                    {isLoading ? 'En cours...' : 'Enregistrer'}
                    </button>
                </form>
            </div>
        </div>
    );
}
