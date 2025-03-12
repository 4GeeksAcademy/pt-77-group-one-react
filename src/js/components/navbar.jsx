import React from "react"


const Navbar = () => {
    return (
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                <div class="container-fluid justify-content-center">
                    <a class="navbar-brand fw-bold" href="#">POPular Music</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )   
}
 export default Navbar