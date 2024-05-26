import { LitElement, css, html } from 'lit'
import { BootStyles } from '../bootstrap';
export class Pop extends LitElement {
  static get properties() {
    return {
        popRta: { type: String },
        popPrice : { type: String },
        options: {}
    }
  }
  constructor() {
    super()
    this.popRta = ''
    this.popPrice = ''
    this.options = [
      {
        op:'PWA',
        img: 'img/pw-removebg-preview.png',
        price: '2000'
      },
      {
        op:'SPA',
        img: 'img/spa-removebg-preview.png',
        price: '1000'
      },
      {
        op:'Native',
        img: 'img/native-removebg-preview.png',
        price: '3000'
      }
    ]
  }

  static get styles() {
    return [BootStyles,css`
        .pop-content{
            background-color:white;
            color:black;
            width: 20em;
            height:20em;
            padding:1em;
            display:flex;
        }
        .sect{
            width:100%;
            height:100%;
            cursor:pointer;
        }
        .item{
            height:100%;
            width:33%;
            display:flex;
            flex-direction:column;
            cursor:pointer;
        }
        .img{
          width:20%;
          height:20%;
        }
    `]
  }



  SetRta(item){
    this.popRta = item.op;
    this.popPrice = item.price;
    const event = new CustomEvent('rta-sent',{
      detail: {
        data:this.popRta,
        price:this.popPrice,
      },
      bubbles: true,
      composed:true
    })
    this.dispatchEvent(event);
  }

  render() {
    return html`
        <div class="pop-content">
          ${this.options.map((item)=>html`
            <div class="item" @click="${() => this.SetRta(item)}">
            <img class="im" src="${item.img}" alt="${item.op}">
            <h2>${item.op}</h2>
            </div>
          `)}
        </div>
    `
  }




}

window.customElements.define('pop-up', Pop)
