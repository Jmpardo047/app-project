import { LitElement, css, html } from 'lit'
import { BootStyles } from '../bootstrap';
import { plantillaData } from '../models/forms/fromApp';
import { Home } from './home';
export class Form extends LitElement {
    static get properties(){
        return {
            formulario: {type:Boolean}
        }
    }

    static get styles(){
        return [BootStyles, css`
        .card-big {
            display:flex;
            justify-content: center;
            align-self: center;
            padding-top:4rem;
            height: 88rem;
            width:50rem;
            background-color: #1f1d1b;
            border-radius: 10px;
        }
        .main-container{
            width: 90rem;
            height:270vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .volver{
            margin-bottom:3rem;
            cursor: pointer;
        }
        .inputs-d{
            padding-left:1rem;
            height:2rem;
            background-color: white;
            border-radius: 5px;
            border: solid 2px #14e2cd;
            color:#1f1d1b;
        }
        .button{
            height:3em;
            width:10em;
            font-size: 1.3em;
            background-image: linear-gradient(to left, #7a56f4, #14e2cd);
            border-radius:0.2em;
            border: none;
            cursor:pointer;
          }
        .card{
            height:30rem;
            width:40rem;
            // background-color:black
     
        }
        .top{
            display: flex;
        }
        .bb{
           margin-bottom: 2rem;
        }
        .container-price{
            padding-top: 0.2rem;
            background-color: white;
            border: solid 1.5px #14e2cd;
            border-radius: 5px;
            width:25rem;
            height:2rem;
            color: #1f1d1b;
            align-self:center
        }
        .container-config{
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content:center;
            gap:0.5rem;
            background-color: white;
            border: solid 1.5px #14e2cd;
            border-radius: 5px;
            width:30rem;
            height:47rem;

            align-self:center
        }
        .redes-s{
            width:2rem;
        }
        .icons{
            display:flex;
            flex-direction:row;
            justify-content: space-around;
            margin-bottom:1rem;
        }
        .container-text{
            display:flex;
            // background-color: black;
            width:50rem;
            text-align:center;
            align-items:center;
            flex-direction: column;
            align-self: center;
        }
        .facebook{
            background-color: #1976D2;
            display: flex;
            justify-content:space-around;
            align-items:center;
            border-radius: 5px;
            width:7rem;     
            margin-right:1rem;
            cursor: pointer;
        }
        .linkedin{
            background-color: #007AB9;
            display: flex;
            justify-content:space-around;
            align-items:center;
            border-radius: 5px;
            width:7rem;  
            margin-right:1rem;
            cursor: pointer;
        }
        .google{
            background-color: #DD4B39;
            display: flex;
            justify-content:space-around;
            align-items:center;
            border-radius: 5px;
            width:7rem;  
            margin-right:1rem;
            cursor: pointer;
        }
        .x{
            background-color: white;
            display: flex;
            justify-content:space-around;
            align-items:center;
            border-radius: 5px;
            width:7rem;  
            color:black;
            padding:0.2rem;
            cursor: pointer;
        }
        .container-price-config{
            display:flex;
            justify-content: center;
            width: 40rem;
            flex-direction:column;
            align-items: center;
            gap:2rem;
        }
        .container-option{
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            padding-top:1rem;
            background-color: white;
            border: 1px solid blue;
            border-radius:5px;
            width:25rem;
            height:4rem;
            color:#1f1d1b;
        }
        .text{
            display:flex;
            justify-content: center;
        }
        `]
    }

    constructor() {
        super();
        this.formulario = true
    }

    render(){
        return html`${this.formulario? html`
        <div class= "main-container">
        <div class="top">
        <p class="volver fs-5 text" @click="${this._returnToHome}">< volver al inicio</p>
        </div>
        <div class="container-text ">
        <p>¡Bien! ¡Hemos terminado!</p>
        <p class="fw-bold fs-4">¡Compártenos si te ha gustado!</p>
        <div class="icons">
        <div class="facebook"><img class="redes-s" src="img/facebook.png" >Share</div><div class="linkedin"><img class="redes-s" src="img/linkedin.png">Share</div><div class="google"><img class="redes-s" src="img/google.png">Google +</div><div class="x"><img class="redes-s" src="img/x.png">Share</div>
        </div>
        <p class="fw-bold fs-1">El costo estimado de tu app es</p>
        <p class="fw-bold"style="color: #14e2cd; margin-bottom:5rem; font-size:4rem;;">$${window.appPrice}</p>
        </div>
        <div class="card-big">
        <div class="row d-flex justify-content-center container">
            <div class="d-flex flex-column align-items-center text-center">
                <h3 class="fw-bold fs-2 text" style="color: #14e2cd ;">Formulario</h3>
                <p class="blue-text">Llena tus datos y así podremos crear una experincia personalizada para ti.</p>
                <div class="card">
                    <form class="form-card" @submit="${this._handleSubmit.bind(this)}">
                        <div class="row justify-content-between text-left bb">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label   class="form-control-label">Nombre<span class="text-danger"> *</span></label> <input type="text" class="inputs-d" id="first_name" name="first_name" placeholder="Ingresa tu nombre" required > </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label">Apellido<span class="text-danger"> *</span></label> <input type="text" class="inputs-d" id="last_name" name="last_name" placeholder="Ingresa tu apellido" required> </div>
                        </div>
                        <div class="row justify-content-between text-left bb">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label">Email<span class="text-danger"> *</span></label> <input type="email" class="inputs-d" id="email" name="email" placeholder="Ingresa tu email" required> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label">Número de teléfono<span class="text-danger"> *</span></label> <input type="number" class="inputs-d" id="phone_number" name="phone_number" placeholder="Ingresa tu número" required> </div>
                        </div>
                        <div class="row justify-content-between text-left bb">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label">País<span class="text-danger"> *</span></label> <input type="text" class="inputs-d" id="country" name="country" placeholder="Ingresa tu país" required> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label">Ciudad<span class="text-danger"> *</span></label> <input type="text" class="inputs-d" id="city" name="city" placeholder="Ingresa tu ciudad" required> </div>
                        </div>
                        <div class="container-price-config">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label text">Costo<span class="text-danger"> *</span></label><div class="container-price">${window.appPrice}</div></div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label text">Selección<span class="text-danger"> *</span></label><div class="container-config">
                        <div class="container-option">¿Qué nivel de calidad estás buscando?<p class="fw-bold">${localStorage.op0}</p></div>
                        <div class="container-option">¿Qué tipo de App necesitas? <p class="fw-bold"> ${localStorage.op1} </p></div> 
                        <div class="container-option">¿Qué diseño quieres que tenga tu App? <p class="fw-bold"> ${localStorage.op2} </p></div>
                        <div class="container-option">¿Cómo quieres sacar beneficio a tu App? <p class="fw-bold"> ${localStorage.op3} <p></div>
                        <div class="container-option">¿Tu App necesita un sistema de login ? <p class="fw-bold"> ${localStorage.op4} </p></div> 
                        <div class="container-option">¿Tu App tiene que estar integrada con un sitio web? <p class="fw-bold"> ${localStorage.op5} <p></div>
                        <div class="container-option">¿Los usuarios tienen sus propios perfiles? <p class="fw-bold"> ${localStorage.op6} <p></div>
                        <div class="container-option">¿Tu app necesita un panel de administración? <p class="fw-bold"> ${localStorage.op7} <p></div>
                        <div class="container-option">¿Qué idiomas usará tu aplicación? <p class="fw-bold"> ${localStorage.op8} </p></div>
                        <div class="container-option">¿En qué estado se encuentra tu proyecto? <p class="fw-bold"> ${localStorage.op9} </p></div></div></div>
                        </div>
                        <div class="row justify-content-center ">
                            <div class="form-group col-sm-6"><br><button type="submit" class="btn-block btn-primary button">Enviar</button> </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div>
    
        `: html`<home-page></home-page>`}`;
    }
    async _handleSubmit(event) {
        event.preventDefault();

        const formulario = this.shadowRoot.querySelector('form');
        const formContent = new FormData(formulario);
        console.log(formContent) 
        const data = new plantillaData({
            id: Date.now().toString,
            first_name: formContent.get('first_name'),
            last_name: formContent.get('last_name'),
            email: formContent.get('email'),
            phone_number: formContent.get('phone_number'),
            country: formContent.get('country'),
            city: formContent.get('city'),
            cost: window.appPrice,
            config: {
                calidad: localStorage.getItem('op0'),
                tipo: localStorage.getItem('op1'),
                diseño: localStorage.getItem('op2'),
                beneficio: localStorage.getItem('op3'),
                login: localStorage.getItem('op4'),
                integracion: localStorage.getItem('op5'),
                perfiles: localStorage.getItem('op6'),
                adminPanel: localStorage.getItem('op7'),
                idioma: localStorage.getItem('op8'),
                estado: localStorage.getItem('op9'),
            }
        });

            console.log(data)

            try {
                const consumo = await fetch ('https://664780a22bb946cf2f9df761.mockapi.io/form-f', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
            });
            console.log(consumo.body);

            if (!consumo.ok) {
                const somethingBad = await consumo.text();
                throw new Error(`Error => ${consumo.statusText} - ${somethingBad}`);
            }
            
            const output = await consumo.json();
            console.log('API response:', output)
        }
        catch (error) {
            console.log ('Data Error',error)
        }
    }

    _returnToHome(){
        this.formulario = false;
    }

}
 

customElements.define('form-f', Form)