import { LitElement, css, html } from 'lit'
import { BootStyles } from '../bootstrap';
import { plantillaData } from '../models/forms/fromApp';

export class Form extends LitElement {
    static get properties(){
        return {
   
            formulario: {type:Boolean}
        }
    }

    static get styles(){
        return [BootStyles, css`
        .card-big {
            display: flex;
            justify-content: center;
            height: 40rem;
            width:50rem;
            background-color:gray;
            border-radius: 10px;
        }
        .main-container{
            width: 90rem;
            height:90vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0rem;
        }
        .top{
            display:flex;
            align-items: ;
        }
        .volver{
            cursor: pointer;
        }
        .inputs-d{
            padding-left:1rem;
            height:2rem;
            background-color: white;
            border-radius: 5px;
            border: solid 1px blue;
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
        .container{
            display:flex;
            align-items: center;


            width: 50rem;
        }
        .form-card{
            width:40rem;
            padding:1rem;

        }
        .bb{
           margin-bottom: 2rem;
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
        <p class="volver fs-5 text">< volver</p>
        </div>
        <div class="container-fluid px-1 py-5 mx-auto card-big">
        <div class="row d-flex justify-content-center container">
            <div class="col-xl-10 text-center">
                <h3 class="fw-bold fs-2 text">Formulario</h3>
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
                        <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label">Costo<span class="text-danger"> *</span></label> <input type="text" class="inputs-d" id="cost" name="cost" placeholder="" required> </div>
                        <div class="form-group col-sm-6 flex-column d-flex bb"> <label class="form-control-label">Config<span class="text-danger"> *</span></label> <input type="text" class="inputs-d" id="config" name="config" placeholder="" required  > </div>
                        
                        <div class="row justify-content-center ">
                            <div class="form-group col-sm-6"><br><button type="submit" class="btn-block btn-primary button">Enviar</button> </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div>
    
        `: "" }`
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
            cost: Number(formContent.get('cost')),
            config: {}
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

}
 

customElements.define('form-f', Form)