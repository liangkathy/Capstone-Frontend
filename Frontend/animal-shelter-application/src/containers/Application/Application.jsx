import { useContext } from "react"
import { ApplicationsContext } from "../../contexts/ApplicationsContext"
import './Application.css'
import { Link } from "react-router-dom"
import { timestampFormatter } from "../../utils/utils.js";
import { ThemeContext } from "../../contexts/ThemeContext.js";

const Application = () => {
    const {theme} = useContext(ThemeContext)
    const {applications, setApplications} = useContext(ApplicationsContext)

    

    return (
        <section className={`application-container ${theme}`}>
            <h4>Your Applications</h4>
            <div className="applications-list">
                {
                    applications.length === 0 ? (
                        <>
                            <h3>No applications submitted yet!</h3>
                            <p>Want to apply for a pet? Apply <Link to="/apply">here</Link></p>
                        </>
                        ) : (
                            applications.map((app, i) => { 
                                return (
                                <Link to={`/applications/${app.id}`}>
                                    <div key={i} className="app-label">
                                        Application for {app.pets.map(pet => pet.name).join(' & ')}
                                    </div>
                                    <div>Submitted at: {timestampFormatter(app.timestamp)}</div>
                                
                                </Link>
                                )
                        })
                    )
                }
            </div>

        </section>
    )
}

export default Application