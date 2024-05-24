import { LitElement, css, html } from 'lit'
import { BootStyles } from '../bootstrap';
import { Form } from './form';
export class Pages extends LitElement {
    static properties = {
        pages: {},
        counter: {type:Number},
        isActive: {type:Boolean},
        appPrice: {type:Number},
        priceHist: {type:Array},
        isVisible: {type:Boolean}
    }
    

    constructor(){
        super();
        this.counter = 0;
        this.isActive = true
        this.appPrice = 0;
        this.priceHist = [0];
        this.isVisible = false;
        this.pages = [

            {   number: "1/10",
                question:"¿Que nivel de calidad estás buscando?",
                options:[
                    {
                     
                        photo: "img/Picture2.png",
                        subtext: "Calidad óptima",
                        price: "1000"
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Buena relacion calidad/precio",
                        price: "2000"
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "No me importa tanto la calidad",
                        price: "3000"

                    }
                ]
            },
            {
                number: "2/10",
                question:"¿Qué tipo de App necesitas?",
                options:[
                    {
                        photo: "img/android.png",
                        subtext: "Aplicación Android",
                        price: "1000"
                    },
                    {
                        photo: "img/ios.png",
                        subtext: "Aplicación iOS",
                        price: "2000"
                    },
                    {
                        photo: "img/windows.png",
                        subtext: "Aplicación Windows Phone",
                        price: "2000"
                    },
                    {
                        photo: "img/windows.png",
                        subtext: "Aplicación Android + iOS",
                        price: "3000"
                    },
                    {
                        photo: "img/windows.png",
                        subtext: "Aplicación de escritorio",
                        price: "3000"
                    }
                ]
            },
            {
                question:"¿Qué diseño quieres que tenga tu App?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Interfaz sencilla",
                        price: "1000"
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Interfaz personalizada",
                        price: "2000"
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "Interfaz replicada de la web",
                        price: "3000"
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "No necesito diseño",
                        price: "3000"
                    }
                ]
            },
            {
                question:"¿Cómo quieres sacar beneficio a tu App?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Aplicación gratuita con publicidad",
                        price: "1000"
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Aplicación de pago",
                        price: "2000"
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "Compras dentro de la app",
                        price: "3000"
                    },
                    {
                        photo: "",
                        subtext: "Otros / No lo sé todavia",
                        price: "3000"
                    }
                ]
            },
            {
                question:"¿Tu App necesita un sistema de login?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Sí, con redes sociales y email",
                        price: "1000"
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Sí, con email",
                        price: "2000"
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "No",
                        price: "3000"
                    },
                    {
                        photo: "",
                        subtext: "No lo se todavia ",
                        price: "3000"
                    }
                ]
            },
            {
                question:"¿Tu App tiene que estar integrada con un sitio web?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Sí",
                        price: "1000"
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "No",
                        price: "2000"
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "No lo sé",
                        price: "3000"
                    }
                ]
            },
            {
                question:"¿Los usuarios tienen sus propios perfiles?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Sí",
                        price: "1000"
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "No",
                        price: "2000"
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "No lo sé",
                        price: "3000"
                    }
                ]
            },
            {
                question:"¿Tu app necesita un panel de administración?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Sí",
                        price: "1000"
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "No",
                        price: "2000"
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "No lo sé",
                        price: "3000"
                    }
                ]
            },
            {
                question:"¿Qué idiomas usará tu aplicación?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Un único idioma",
                        price: "1000"
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Bilingue",
                        price: "2000"
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "Multilingue",
                        price: "3000"
                    },
                ]
            },
            {
                question:"¿En qué estado se encuentra tu proyecto?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Solo es una idea",
                        price: "1000"
                        
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Boceto ya preparado",
                        price: "2000"
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "App en desarrollo",
                        price: "3000"
                    },
                    {
                        photo: "",
                        subtext: "App ya desarrollada",
                        price: "3000"
                    }
                ]
            },
        ]   
    }


    static get styles () {
        return [BootStyles, css`
        .question {
            font-size: 3rem;
        }
        .photo{
            width: 20rem;
            cursor: pointer;
        }
        #count{
            
        }
        .content{
            gap:2em;
            height:100vh;
            justify-content:center;
        }
        .volver{
            cursor:pointer;
        }
        .nav{
            width:100%;
            justify-content:space-between;
        }
        `]
    } 

    render (){
        return html`${this.isActive ? html`        
        <div class="d-flex flex-column align-items-center content">
        <div class="nav d-flex">
            <h2 class="volver" @click="${this._dwCounter}" style="display: ${this.isVisible ? 'block':'none'};"><---volver</h2>
            <h2 id="count" class="mb">${this.counter+1}/10</h2>
            <h2>${this.appPrice}$</h2>
        </div>
        <p class="fw-bold" style="font-size: 3rem;">${this.pages[this.counter].question}</p>
        <div class="d-flex flex-row">
            ${this.pages[this.counter].options.map((item) => html`
                <div @click="${() => this._uptCounter(item)}" class="d-flex flex-column align-items-center">
                <img src=${item.photo} alt="" class="photo">
                <p part="button" class="subtext">${item.subtext}</p>
                </div>
            `)}
        </div>  `
        :html`<form-f></form-f>`}`;
    }

    _uptCounter(item){  
        if(this.counter < 9 && this.counter >= 0){
            this.counter = this.counter + 1;
            localStorage.setItem(`op${this.counter}`,`${item.subtext}`);       
            this.appPrice += parseInt(`${item.price}`);
            this.priceHist.push(this.appPrice);
            console.log(this.priceHist);
            console.log(localStorage.getItem(`op${this.counter}`));
            console.log(this.counter);
            if(this.counter>=0){
                this.isVisible = true;
            }
            
        }
        else if(this.counter >=9){
            localStorage.setItem(`op${this.counter+1}`,`${item.subtext}`)
            console.log(localStorage.getItem(`op${this.counter+1}`))
            console.log(this.counter);
            this._sendData()
            this.isActive = !this.isActive;
        }
    }
    _dwCounter(){
        if(this.counter >= 0 && this.counter <= 10){
            this.counter = this.counter - 1;    
            let lstP = this.priceHist.length -2;
            console.log(lstP);
            this.appPrice = this.priceHist[lstP];
            this.priceHist.pop();
            console.log(this.appPrice);
            if(this.counter<=0){
                this.isVisible = false;
            }
        }
    }
    _sendData(){
        const keys = [];
            for(let i=0; i<localStorage.length;i++){
                keys.push(localStorage.getItem(`op${i}`));
            }
        console.log(keys);
    }

}
customElements.define("pages-p", Pages);