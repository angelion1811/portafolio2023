const Footer = () => {
    return(<>
        <footer id="footer" className="section bg-dark text-white">
            <div className="container">
            <div className="row">
                <div className="col-lg-6 text-center text-lg-start wow fadeInUp" style={{"visibility":"hidden", "animation-name": "none"}}>
                <p className="mb-2 mb-lg-0">Copyright © 2024 <a className="fw-600" href="#">Angel Léon</a>. All Rights Reserved.</p>
                </div>
                <div className="col-lg-6 wow fadeInUp" style={{"visibility": "hidden", "animation-name": "none"}}>
                </div>
            </div>
            </div>
        </footer>
    </>)
}

export default Footer