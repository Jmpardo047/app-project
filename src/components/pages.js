import { LitElement, css, html } from 'lit'
import { BootStyles } from '../bootstrap';

export class Pages extends LitElement {
    static properties = {
        pages: {}
    }
    

    constructor(){
        super();
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
                        photo2: "img/Picture4.png",
                        subtext2: "No me importa tanto la calidad",
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
        <p class="fw-bold" style="font-size: 3rem;">hh</p>
        <div class="d-flex flex-row">
            <div class="d-flex flex-column align-items-center">
                <img src="img/Picture2.png" alt="" class="photo">
                <p class="subtext">Holaaa</p>
            </div>
            <div class= "d-flex flex-column align-items-center">
                <img src="img/Picture2.png" alt="" class="photo">
                <p class="subtext">Holaaa</p>
            </div>
            <div class="d-flex flex-column align-items-center">
                <img src="img/Picture2.png" alt="" class="photo">
                <p class="subtext">Holaaa</p>
            </div>
        </div>
      </div>
        `;
    }

}

customElements.define("pages-p", Pages);