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
        .background {
            background-color: gray;
        }
        .main-container{
            width: 90rem;
            height:100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10rem;
            // background-color: blue;
            // margin-right: 50rem
        }
        .top{
            display:flex;
            align-items: first baseline;
        }
        .volver{
            cursor: pointer;
        }
        `]
    }

    constructor() {

        this.formulario = true
    }

    render(){
        return html`${this.formulario? html`
        <div class= "main-container">
        <div class="top">
        <p class="volver">< volver</p>
        </div>
        <div class="container-fluid px-1 py-5 mx-auto background">
        <div class="row d-flex justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                <h3>Data Form</h3>
                <p class="blue-text">Llena tus datos y así podremos crear una experincia personalizada para ti.</p>
                <div class="card">
                    <form class="form-card" @submit="${this._handleSubmit.bind(this)}">
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label   class="form-control-label px-3">First name<span class="text-danger"> *</span></label> <input type="text" id="first_name" name="first_name" placeholder="Enter your first name" required > </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Last name<span class="text-danger"> *</span></label> <input type="text" id="last_name" name="last_name" placeholder="Enter your last name" required> </div>
                        </div>
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Email<span class="text-danger"> *</span></label> <input type="email" id="email" name="email" placeholder="Enter your email" required> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Phone number<span class="text-danger"> *</span></label> <input type="number" id="phone_number" name="phone_number" placeholder="Enter yor number" required> </div>
                        </div>
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Country<span class="text-danger"> *</span></label> <input type="text" id="country" name="country" placeholder="Enter your country" required> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">City<span class="text-danger"> *</span></label> <input type="text" id="city" name="city" placeholder="Enter your city" required> </div>
                        </div>
                        <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Cost<span class="text-danger"> *</span></label> <input type="text" id="cost" name="cost" placeholder="Enter your country" required> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Config<span class="text-danger"> *</span></label> <input type="text" id="config" name="config" placeholder="Enter your city" required  > </div>
                        
                        <div class="row justify-content-center">
                            <div class="form-group col-sm-6"><br><button type="submit" class="btn-block btn-primary">Enviar</button> </div>
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
            const consumo = await fetch ('https://664780a22bb946cf2f9df761.mockapi.io/users', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
        });

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