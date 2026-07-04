const DashboardCard = ({ title, value, color, icon }) => {

    return (

        <div className="col-lg-3 col-md-6 mb-4">

            <div className={`card shadow border-0 ${color}`}>

                <div className="card-body">

                    <div className="d-flex justify-content-between">

                        <div>

                            <small className="fw-semibold">

                                {title}

                            </small>

                            <h2 className="fw-bold mt-2">

                                {value}

                            </h2>

                        </div>

                        <i
                            className={`${icon} fs-1 opacity-75`}
                        ></i>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default DashboardCard;