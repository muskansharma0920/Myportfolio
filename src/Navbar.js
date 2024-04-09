import React from "react";
const Navbar = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><font color="white">Portfolio</font></a>
                    <div class="navbar-nav ms-auto " >
                        <a class="nav-link active" aria-current="page" href="#home" ><font color="white">Home</font></a>
                        <a class="nav-link" href="#about"><font color="white">About</font></a>
                        <a class="nav-link" href="#skill"><font color="white">Skills</font></a>
                        <a class="nav-link" href="#project"><font color="white">Projects</font></a>
                        <a class="nav-link" href="#contact"><font color="white">Contact</font></a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;