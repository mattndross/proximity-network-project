import "./Footer.css"


const Footer = () => {
    return (
        <section id="footer" style={{ backgroundColor: "#353232" }}>
            <div className="container footer-content">
                <div className="row">
                    <div className="col-lg-8 footer-text">
                        <p>Powered by create Proximity netword</p>
                        <p className="copyright">© Copyright sitename.All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-4 footer-icon">
                        <a href="#home" style={{ marginRight: "20px" }}><i class="bi bi-house-door-fill"></i></a>
                        <a href="https://github.com/mattndross/proximity-network-project" target="_blank"><i class="bi bi-github"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;