import Header from '../Header/Header'
import AuthHeader from '../../components/Auth/AuthHeader/AuthHeader'
import './Error.css'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Link } from 'react-router-dom'

const Error = () => {
    const {theme} = useContext(ThemeContext)
    const isAdminPath = sessionStorage.getItem('adminPath')

    return (
        <section className={`error-section ${theme}`}>
            <h4>404: PAGE NOT FOUND</h4>
            <Link to={!isAdminPath ? "/" : "/admin/home"}>Return Home</Link>
        </section>
    )
}

export default Error