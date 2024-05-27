import { LitElement, css, html } from 'lit'
import { BootStyles } from '../bootstrap';
import { Form } from './form';
import { Pop } from './pop';
window.appPrice = Number;
export class Pages extends LitElement {
    static properties = {
        pages: {},
        counter: {type:Number},
        isActive: {type:Boolean},
        appPrice: {type:Number},
        priceHist: {type:Array},
        isVisible: {type:Boolean},
        popUp: {type:Boolean},
        popData: {type:String},
        popPrice: {type:String},
    }
    

    constructor(){
        super();
        this.counter = 0;
        this.isActive = true
        this.appPrice = 0;
        this.priceHist = [0];
        this.isVisible = false;
        this.popUp = false;
        this.popData = '';
        this._onDataRecieved = this._onDataRecieved.bind(this);
        this.popPrice = '';
        this.pages = [];
        this.loadPages();
    }


    static get styles () {
        return [BootStyles, css`
        
        .photo{
            width: 70%;
            cursor: pointer;
        }
        #count{
            font-size:1.5rem;
        }
        .content{
            gap:2em;
            height:100vh;
            justify-content:center;
            width:70vw;
        }
        .volver{
            cursor:pointer;
            font-size: 1.5rem;
        }
        .nav{
            width:100%;
            justify-content:space-between;
            margin-bottom:5rem;
        }
        .pop{
            position:absolute;
            bottom:2em;
            right:11em;

        }
        .options{
            margin-top:5rem;
            width:100%;
        }
        .item:hover {
            background-color: #514d4a;
            scale: 1.02;
            transition-duration: 1s;
            border: 1px solid white;
          }
        .item{
            margin-bottom:5rem;
            width:30%
        }
        `]
    } 

    render (){
        return html`${this.isActive ? html`        
        <div class="d-flex flex-column content">
            <div class="nav d-flex">
                <h1 class="volver" @click="${this._dwCounter}" style="display: ${this.isVisible ? 'block':'none'};">< volver</h1>
                <h2 id="count" class="mb">${this.counter+1}/10</h2>
                <h2 id="count">${this.appPrice}$</h2>
            </div>
            <p class="fw-bold text-center" style="font-size:2rem; margin-bottom: -1rem;">${this.pages[this.counter]?.question}</p>
            <div class="d-flex flex-row options">
                ${this.pages[this.counter]?.options.map((item) => html`
                    <div @click="${() => this._checkPopUp(item)}" class="d-flex flex-column align-items-center item">
                    <img src=${item.photo} alt="" class="photo">
                    <p part="button" class="subtext">${item.subtext}</p>
                    </div>
                `)}
            <pop-up style="display: ${this.popUp ? 'block':'none'};" class="pop"></pop-up>
            </div>
        </div>  `
        :html`<form-f></form-f>`}`;
    }

    async loadPages(){
        try{
            const response = await fetch('public/pages.json');
            this.pages = await response.json();
        }
        catch (error){
            console.error('Error loading pages:', error);
        }
    }

    _onDataRecieved(event){
        this.popData = event.detail.data;
        this.popPrice = event.detail.price;
        this._executeFunctionWithData();
    }
    _executeFunctionWithData() {
        if (!(this.popData === "")){
            console.log('Data received:', this.popData);
            localStorage.setItem(`op${this.counter}`,`Aplicación de escritorio: ${this.popData}`);
            this.appPrice += parseInt(`${this.popPrice}`);
            this.priceHist.push(this.appPrice);
            console.log(localStorage.getItem(`op${this.counter}`));
            console.log(this.priceHist);
            this.counter = this.counter + 1;
            this.popUp = false;
        }
      }

    connectedCallback(){
        super.connectedCallback();
        this.addEventListener('rta-sent',this._onDataRecieved);
    }

    disconnectedCallback(){
        this.removeEventListener('rta-sent',this._onDataRecieved);
        super.disconnectedCallback();
    }

    _uptCounter(item){  
        if(this.counter < 9 && this.counter >= 0){
            localStorage.setItem(`op${this.counter}`,`${item.subtext}`);     
            this.appPrice += parseInt(`${item.price}`);
            this.priceHist.push(this.appPrice);
            console.log(this.priceHist);
            console.log(localStorage.getItem(`op${this.counter}`));
            console.log(localStorage)
            if(this.counter>=0){
                this.isVisible = true;
            }
            this.popUp = false;
            this.counter = this.counter + 1;
            console.log(this.counter);
        }
        else if(this.counter >= 9){
            localStorage.setItem(`op${this.counter}`,`${item.subtext}`)
            console.log(localStorage.getItem(`op${this.counter+1}`))
            console.log(this.counter);
            window.appPrice = this.appPrice;
            this.isActive = false;
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
    _checkPopUp(item){
        if(item.subtext === "Aplicación de escritorio"){
            this.popUp = true;
        }
        else{
            this._uptCounter(item);
        }
    }

}
customElements.define("pages-p", Pages);
