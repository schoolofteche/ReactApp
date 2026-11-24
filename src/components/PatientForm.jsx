
import { useState } from 'react';

function PatientForm({ onAddPatient, onCancel }) {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: ''
    });

    // Capture input changes
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    };

    // Handle form submission
    const handleSubmit = (e) => {

        e.preventDefault();

        onAddPatient(formData);

        setFormData({
            fullName: '',
            email: '',
            phone: ''
        });

    };

    return (
        <div className="card shadow-sm mb-4">

            <div className="card-body">

                <h5 className="fw-bold mb-4">
                    Register New Patient
                </h5>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label className="form-label">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="fullName"
                            className="form-control"
                            placeholder="Enter full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Phone Number
                        </label>

                        <input
                            type="tel"
                            name="phone"
                            className="form-control"
                            placeholder="Enter phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Save Patient
                    </button>

                    <button
                        type="button"
                        className="btn btn-secondary ms-2"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>

                </form>

            </div>

        </div>
    );
}

export default PatientForm;
