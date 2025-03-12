import React from "react";

const Jumbo = () => {
    return (
        <div className="mb-4 bg-light rounded-3 mx-5 mt-4">
            <div className="container-fluid py-5 text-start">
                <h1 className="display-5 fw-bold d-flex justify-content-center">Current Popular Muscians</h1>
                <div class="d-flex justify-content-center">
                    <p className="col-md-8 fs-4" style={{ textAlign: 'center' }}>
                        Each of these bands or muscians are very popular now in 2025
                    </p>
                </div>
                <div class="d-flex justify-content-center">
                    <button className="btn btn-primary btn-lg" type="button">
                        Access Musicians!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Jumbo;