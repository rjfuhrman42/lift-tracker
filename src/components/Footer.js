import React from "react"

function Footer() {
    return (
        <footer id="footer">
            <div className="in-touch"> 
                <a href="https://rjfuhrman42.github.io/Portfolio-Website/" target="_blank">
                    Get in touch
                </a>
            </div>
            <div>
                <ul className="socials">
                        <li>
                            <a href="https://github.com/rjfuhrman42" target="_blank">
                                <i className="ri-github-fill ri-xl"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/reid-fuhrman-73324b180/" target="_blank">
                                <i className="ri-linkedin-box-fill ri-xl"></i>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:reidjf77@gmail.com" target="_blank">
                            <i className="ri-mail-fill ri-xl"></i>
                            </a>
                        </li>
                </ul>
            </div>
            <div className="api">
                <a href="https://wger.de/en/software/api" target="_blank">
                    wger API
                </a>
            </div>
        </footer>
    )
}

export default Footer 