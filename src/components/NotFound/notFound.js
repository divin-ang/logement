import { Link } from 'react-router-dom'
import Menu from '../Menu'
const NotFound =()=><div>
<div><Menu/></div>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="error-template">
                <h1>
                    Oops!</h1>
                <h2>Page introuvable</h2>
                <div class="error-details">
                    Désolé , nous n'avons pas trové la page demandée ! 
                </div>
                <div class="error-actions">
                  <p>Besoin d'aide ?  <Link to="contact">Nous contacter</Link></p>
                </div>
            </div>
        </div>
    </div>
</div>


</div>
export default NotFound