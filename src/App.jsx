
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
        },
        {
            id: 'PAT-002',
            fullName: 'Mary Wanjiku',
            email: 'mary@gmail.com',
            phone: '0711223344'
        },
        {
            id: 'PAT-003',
            fullName: 'Peter Kamau',
            email: 'peter@gmail.com',
            phone: '0722334455'
        }
    ]);

    // Form visibility
    const [showForm, setShowForm] = useState(false);

    // Patient currently being edited
    const [editingPatient, setEditingPatient] = useState(null);

    // Search text
    const [searchTerm, setSearchTerm] = useState('');

    // Open form for adding a new patient
    const handleShowForm = () => {
        setEditingPatient(null);
        setShowForm(true);
    };

    // Close form
    const handleCloseForm = () => {
        setShowForm(false);
        setEditingPatient(null);
    };

    // Open form for editing
    const handleEditPatient = (patient) => {
        setEditingPatient(patient);
        setShowForm(true);
    };

    // Save a new patient or update an existing patient
    const handleSavePatient = (patientData) => {

        if (editingPatient) {

            setPatients((previousPatients) =>
                previousPatients.map((patient) =>
                    patient.id === editingPatient.id
                        ? { ...patient, ...patientData }
                        : patient
                )
            );

        } else {

            const newPatient = {
                id: `PAT-${Date.now()}`,
                ...patientData
            };

            setPatients((previousPatients) => [
                ...previousPatients,
                newPatient
            ]);

        }

        setShowForm(false);
        setEditingPatient(null);

    };

    // Delete a patient
    const handleDeletePatient = (patientId) => {

        const confirmDelete = window.confirm(
            'Are you sure you want to delete this patient?'
        );

        if (confirmDelete) {

            setPatients((previousPatients) =>
                previousPatients.filter(
                    (patient) => patient.id !== patientId
                )
            );

        }

    };

    // Search and filter patients
    const filteredPatients = patients.filter((patient) => {

        const search = searchTerm.toLowerCase();

        return (
            patient.fullName.toLowerCase().includes(search) ||
            patient.email.toLowerCase().includes(search) ||
            patient.phone.toLowerCase().includes(search) ||
            patient.id.toLowerCase().includes(search)
        );

    });

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

                    {/* PATIENT FORM */}
                    {showForm && (
                        <PatientForm
                            key={editingPatient?.id || 'new-patient'}
                            initialData={editingPatient}
                            onSavePatient={handleSavePatient}
                            onCancel={handleCloseForm}
                        />
                    )}

                    {/* PATIENT TABLE */}
                    <PatientTable
                        patients={filteredPatients}
                        onAddClick={handleShowForm}
                        onEdit={handleEditPatient}
                        onDelete={handleDeletePatient}
                        searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                    />

                    <Footer />

                </div>

            </div>

        </div>
    );
}

export default App;
