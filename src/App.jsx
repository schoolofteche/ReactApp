
import { useState } from 'react';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import StatCard from './components/StatCard';
import PatientProfile from './components/PatientProfile';
import PatientTable from './components/PatientTable';
import PatientForm from './components/PatientForm';
import Footer from './components/Footer';

function App() {

    // Initial patient records
    const [patients, setPatients] = useState([
        {
            id: '880293',
            fullName: 'Andrew Jones',
            email: 'andrew@gmail.com',
            phone: '0712345673'
        }
    ]);

    // Controls whether the form is displayed
    const [showForm, setShowForm] = useState(false);

    // Add a new patient
    const handleAddPatient = (patientData) => {

        const newPatient = {
            id: `PAT-${String(patients.length + 1).padStart(3, '0')}`,
            ...patientData
        };

        setPatients([...patients, newPatient]);

        setShowForm(false);

    };

    return (

        <div className="container-fluid">

            <div className="row">

                {/* SIDEBAR */}
                <div className="col-md-2 p-0">
                    <Sidebar />
                </div>

                {/* MAIN CONTENT */}
                <div className="col-md-10 main-content">

                    <Topbar />

                    {/* STATISTICS */}
                     <div className="row g-3 mb-4">

                        <StatCard
                            title="Appointments"
                            count="04"
                            icon="bi-calendar-check"
                            color="primary"
                        />

                        <StatCard
                            title="Medical Records"
                            count="08"
                            icon="bi-file-medical"
                            color="success"
                        />

                        <StatCard
                            title="Prescriptions"
                            count="03"
                            icon="bi-capsule"
                            color="warning"
                        />

                        <StatCard
                            title="Pending Bills"
                            count="02"
                            icon="bi-wallet2"
                            color="danger"
                        />

                    </div>

                    {/* PATIENT PROFILE */}
                    <PatientProfile />

                    {/* SHOW FORM WHEN REQUESTED */}
                    {showForm && (
                        <PatientForm
                            onAddPatient={handleAddPatient}
                            onCancel={() => setShowForm(false)}
                        />
                    )}

                    {/* PATIENT TABLE */}
                    <PatientTable
                        patients={patients}
                        onAddClick={() => setShowForm(true)}
                    />

                    <Footer />

                </div>

            </div>

        </div>
    );
}

export default App;
