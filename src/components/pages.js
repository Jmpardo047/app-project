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

            {
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
                question:"¿Qué tipo de App necesitas?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Aplicación Android",
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Aplicación iOS",
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "Aplicación Windows Phone",
                    },
                    {
                        photo: "",
                        subtext: "Aplicación Android + iOS"
                    }
                ]
            },
            {
                question:"¿Qué tipo de App necesitas?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Aplicación Android",
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Aplicación iOS",
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "Aplicación Windows Phone",
                    },
                    {
                        photo: "",
                        subtext: "Aplicación Android + iOS"
                    }
                ]
            },
            {
                question:"¿Qué tipo de App necesitas?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Aplicación Android",
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Aplicación iOS",
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "Aplicación Windows Phone",
                    },
                    {
                        photo: "",
                        subtext: "Aplicación Android + iOS"
                    }
                ]
            },
            {
                question:"¿Qué tipo de App necesitas?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Aplicación Android",
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Aplicación iOS",
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "Aplicación Windows Phone",
                    },
                    {
                        photo: "",
                        subtext: "Aplicación Android + iOS"
                    }
                ]
            },
            {
                question:"¿Qué tipo de App necesitas?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Aplicación Android",
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Aplicación iOS",
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "Aplicación Windows Phone",
                    },
                    {
                        photo: "",
                        subtext: "Aplicación Android + iOS"
                    }
                ]
            },
            {
                question:"¿Qué tipo de App necesitas?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Aplicación Android",
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Aplicación iOS",
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "Aplicación Windows Phone",
                    },
                    {
                        photo: "",
                        subtext: "Aplicación Android + iOS"
                    }
                ]
            },
            {
                question:"¿Qué tipo de App necesitas?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Aplicación Android",
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Aplicación iOS",
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "Aplicación Windows Phone",
                    },
                    {
                        photo: "",
                        subtext: "Aplicación Android + iOS"
                    }
                ]
            },
            {
                question:"¿Qué tipo de App necesitas?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Aplicación Android",
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Aplicación iOS",
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "Aplicación Windows Phone",
                    },
                    {
                        photo: "",
                        subtext: "Aplicación Android + iOS"
                    }
                ]
            },
            {
                question:"¿Qué tipo de App necesitas?",
                options:[
                    {
                        photo: "img/Picture2.png",
                        subtext: "Aplicación Android",
                    },
                    {
                        photo: "img/Picture3.png",
                        subtext: "Aplicación iOS",
                    },
                    {
                        photo: "img/Picture4.png",
                        subtext: "Aplicación Windows Phone",
                    },
                    {
                        photo: "",
                        subtext: "Aplicación Android + iOS"
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
                <div @click="${this._uptCounter}" class="d-flex flex-column align-items-center">
                <img src=${item.photo} alt="" class="photo">
                <p part="button" class="subtext">${item.subtext}</p>
                </div>
            `)}
        </div>  
        `;
    }
    _uptCounter(){  
        if(this.counter <= 10 && this.counter >= 0){
            this.counter = this.counter + 1;
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