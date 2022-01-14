const Footer = () => {
    return (
        // <footer>
        //     &copy; 2022
        //     <a target="_blank" href="https://github.com/stephansama" rel="noreferrer">GitHub</a>
        //     <a target="_blank" href="https://www.linkedin.com/in/stephan-randle-38a30319a/" rel="noreferrer">LinkedIn</a>
        // </footer>
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                </a>
                <span className="text-muted">&copy; 2022</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                    <a className="text-muted text-decoration-none" href="mailto:stephanrandle.dev@gmail.com?subject=Programming Inquiry">E-mail</a>
                </li>
                <li className="ms-3">
                    <a className="text-muted text-decoration-none" href="https://github.com/stephansama">GitHub</a>
                </li>
                <li className="ms-3">
                    <a className="text-muted text-decoration-none" href="https://www.linkedin.com/in/stephan-randle-38a30319a/">LinkedIn</a>
                </li>
            </ul>
            </footer>
        </div>
    )
}

export default Footer
