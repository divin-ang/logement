import { Link } from 'react-router-dom'
import './signup.css'
const Signup =()=><div >

<div class="signup-form">
    
         <form method="post" action="">
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Prénom</label>
                    <input type="text" className="form-control" placeholder="Jean" />
                </div>

                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" className="form-control" placeholder="Dupont" />
                </div>

                <div className="form-group">
                    <label>Email </label>
                    <input type="email" className="form-control" placeholder="Entrez l'email" />
                </div>

                <div className="form-group">
                    <label>Mot de passe</label>
                    <input type="password" className="form-control" placeholder="Entrer  le mot de passe" />
                </div>

                <input type="submit" className="btn btn-primary btn-block" value="valider"/>
                <p className="forgot-password text-right">
                    Déjà inscrit(e) ?  <Link to="/connexion">Se connecter</Link>
                </p>
            </form>
</div>
</div>

export default Signup