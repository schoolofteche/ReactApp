
function PatientTable({ patients, onAddClick }) {

    return (
        <div className="card table-card">

            <div className="card-body">

                <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">

                    <div>
                        <h5 className="fw-bold">
                            Patient Records
                        </h5>

                        <small className="text-muted">
                            Manage patient information
                        </small>
                    </div>

                    <button
                        className="btn btn-primary"
                        onClick={onAddClick}
                    >
                        <i className="bi bi-plus-circle me-1"></i>
                        Add Patient
                    </button>

                </div>

                <div className="table-responsive">

                    <table className="table table-hover">

                        <thead>
                            <tr>
                                <th>Patient ID</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {patients.map((patient) => (

                                <tr key={patient.id}>

                                    <td>{patient.id}</td>

                                    <td>{patient.fullName}</td>

                                    <td>{patient.email}</td>

                                    <td>{patient.phone}</td>

                                    <td>
                                        <span className="badge bg-success">
                                            Active
                                        </span>
                                    </td>

                                    <td>
                                        <button className="btn btn-sm btn-outline-info">
                                            <i className="bi bi-eye"></i>
                                        </button>

                                        <button className="btn btn-sm btn-outline-primary ms-1">
                                            <i className="bi bi-pencil"></i>
                                        </button>

                                        <button className="btn btn-sm btn-outline-danger ms-1">
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default PatientTable;
