
function PatientTable({
    patients,
    onAddClick,
    onEdit,
    onDelete,
    searchTerm,
    onSearchChange
}) {

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

                {/* SEARCH INPUT */}
                <div className="row mb-3">

                    <div className="col-md-4">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search patient..."
                            value={searchTerm}
                            onChange={(e) =>
                                onSearchChange(e.target.value)
                            }
                        />

                    </div>

                </div>

                {/* PATIENT TABLE */}
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

                            {patients.length > 0 ? (

                                patients.map((patient) => (

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

                                            <button
                                                className="btn btn-sm btn-outline-primary me-1"
                                                onClick={() => onEdit(patient)}
                                            >
                                                <i className="bi bi-pencil"></i>
                                            </button>

                                            <button
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => onDelete(patient.id)}
                                            >
                                                <i className="bi bi-trash"></i>
                                            </button>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>
                                    <td colSpan="6" className="text-center">
                                        No patients found.
                                    </td>
                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default PatientTable;
