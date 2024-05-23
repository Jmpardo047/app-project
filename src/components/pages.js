import { LitElement, css, html } from 'lit'
import { BootStyles } from '../bootstrap';
export class Pages extends LitElement {
    static properties = {
        pages: {},
        counter: {type:Number}
    }
    

    constructor(){
        super();
        this.counter = 0;
        this.pages = [

            {   number: "1/10",
                question:"¿Que nivel de calidad estás buscando?",
                options:[
                    {
                     
                        photo: "img/Picture2.png",
                        subtext: "Calidad óptima",
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Buena relacion calidad/precio",
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "No me importa tanto la calidad",
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
                    },
                    {
                        photo: "img/ios.png",
                        subtext: "Aplicación iOS",
                    },
                    {
                        photo: "img/windows.png",
                        subtext: "Aplicación Windows Phone",
                    },
                    {
                        photo: "img/windows.png",
                        subtext: "Aplicación Android + iOS"
                    },
                    {
                        photo: "img/windows.png",
                        subtext: "Aplicación de escritorio"
                    }
                ]
            },
            {
                question:"¿Qué diseño quieres que tenga tu App?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Interfaz sencilla",
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Interfaz personalizada",
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "Interfaz replicada de la web",
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "No necesito diseño"
                    }
                ]
            },
            {
                question:"¿Cómo quieres sacar beneficio a tu App?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Aplicación gratuita con publicidad",
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Aplicación de pago",
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "Compras dentro de la app",
                    },
                    {
                        photo: "",
                        subtext: "Otros / No lo sé todavia"
                    }
                ]
            },
            {
                question:"¿Tu App necesita un sistema de login?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Sí, con redes sociales y email",
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Sí, con email",
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "No",
                    },
                    {
                        photo: "",
                        subtext: "No lo se todavia "
                    }
                ]
            },
            {
                question:"¿Tu App tiene que estar integrada con un sitio web?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Sí",
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "No",
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "No lo sé",
                    }
                ]
            },
            {
                question:"¿Los usuarios tienen sus propios perfiles?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Sí",
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "No",
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "No lo sé",
                    }
                ]
            },
            {
                question:"¿Tu app necesita un panel de administración?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Sí",
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "No",
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "No lo sé",
                    }
                ]
            },
            {
                question:"¿Qué idiomas usará tu aplicación?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Un único idioma",
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Bilingue",
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "Multilingue",
                    },
                ]
            },
            {
                question:"¿En qué estado se encuentra tu proyecto?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Solo es una idea",
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Boceto ya preparado",
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "App en desarrollo",
                    },
                    {
                        photo: "",
                        subtext: "App ya desarrollada"
                    }
                ]
            },
            {
                number:"3/10",
                question:"¿Qué diseño quieres que tenga tu App?",
                options:[
                    {
                        photo:"",
                        subtext:"Interfaz Sencilla"
                    },
                    {
                        photo:"",
                        subtext:"Interfaz personalizada"
                    },
                    {
                        photo:"",
                        subtext:"Interfaz replicada de la web"
                    },
                    {
                        photo:"",
                        subtext:"No necesito diseño"
                    }
                    
                ]
            }
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
       
        return html`
        <div class="d-flex flex-column align-items-center content">
        <div class="nav d-flex">
            <h2 class="volver" @click="${this._dwCounter}"><---volver</h2>
            <h2 id="count" class="mb">${this.counter+1}/10</h2>
        </div>
        <p class="fw-bold" style="font-size: 3rem;">${this.pages[this.counter].question}</p>
        <div class="d-flex flex-row">
            ${this.pages[this.counter].options.map((item) => html`
                <div @click="${this._uptCounter(item)}" class="d-flex flex-column align-items-center">
                <img src=${item.photo} alt="" class="photo">
                <p part="button" class="subtext">${item.subtext}</p>
                </div>
            `)}
        </div>  
        `;
    }

    _uptCounter(item){  
        if(this.counter <= 10 && this.counter >= 0){
            this.counter = this.counter + 1;
            localStorage.setItem(`op${this.counter}`,`${item.subtext}`)
            console.log(localStorage.getItem(`op${this.counter}`))
            console.log(this.counter);
        }
    }
    _dwCounter(){
        if(this.counter >= 0 && this.counter <= 10){
            this.counter = this.counter - 1;
        }
    }


}
   

customElements.define("pages-p", Pages);