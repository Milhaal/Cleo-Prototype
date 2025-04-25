import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginMain.css';

const LoginMain = () => {
    const navigate = useNavigate(); // Hook pour la navigation

    const handleLogin = () => {
        // Ici, tu peux ajouter la logique d'authentification si nécessaire
        navigate('/memberspace'); // Rediriger vers la page Dashboard
    };

    return (
        <div className="login-wrapper">
            <div className="login-wrapper-left">
                <img className='login-wrapper-left-img' src='./images/login-img.png' alt="Login" />
                <div className="login-wrapper-left-content">
                    <h2 className="login-wrapper-left-title">Apprenez dès maintenant !</h2>
                    <p className="login-wrapper-left-text">Cleo, votre académie vers l’adoption réussie de l’IA</p>
                </div>
            </div>
            <div className="login-wrapper-right">
                <h2 className="login-wrapper-right-title">Se connecter</h2>
                <div className="login-wrapper-right-form">
                    <div className="login-wrapper-right-form-row">
                        <input className="login-wrapper-right-form-input" placeholder='Email' type="email"/>
                    </div>
                    <div className="login-wrapper-right-form-row">
                        <input className="login-wrapper-right-form-input" placeholder='Mot de passe' type='password' />
                        <span className="material-symbols-outlined">visibility</span>
                    </div>
                    <p className='login-wrapper-right-form-text'>Mot de passe oublié ?</p>
                </div>
                <button className='login-wrapper-right-form-btn' onClick={handleLogin}>Se connecter</button>
            </div>
            <img className='login-wrapper-img' src='./images/logo-cleo.png' alt="Logo Cleo" />
        </div>
    );
};

export default LoginMain;