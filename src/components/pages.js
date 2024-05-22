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
            }
        ]   
    }


    static get styles () {
        return [BootStyles, css`
        .question {
            font-size: 3rem
        }
        .photo{
            width: 20rem
        }
        `]
    }

    render (){
        return html`
        <div class="d-flex flex-column align-items-center ">
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
        this.counter = this.counter + 1;
        console.log(this.counter)
    }

}

customElements.define("pages-p", Pages);