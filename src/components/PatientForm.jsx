
import { useState } from 'react';

function PatientForm({
    onSavePatient,
    onCancel,
    initialData
}) {

    const [formData, setFormData] = useState(() => ({
        fullName: initialData?.fullName || '',
        email: initialData?.email || '',
        phone: initialData?.phone || ''
    }));

    // Capture input changes
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));

    };

    // Submit the form
    const handleSubmit = (e) => {

        e.preventDefault();

        onSavePatient(formData);

    };

    return (

        <div className="card shadow-sm mb-4">

            <div className="card-body">

                <h5 className="fw-bold mb-4">
                    {initialData ? 'Edit Patient' : 'Register New Patient'}
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
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        {initialData ? 'Update Patient' : 'Save Patient'}
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
