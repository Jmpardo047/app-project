import { LitElement, css, html } from 'lit'
import { BootStyles } from '../bootstrap';
export class Pop extends LitElement {
  static get properties() {
    return {
        popRta: { type: String },
    }
  }

  static get styles() {
    return [BootStyles,css`
        .pop-content{
            background-color:white;
            color:black;
            width: 20em;
            height:20em;
            padding:1em;    
        }
        .sect{
            width:100%;
            height:100%;
            cursor:pointer;
        }
        .item{
            height:100%;
            width:33%;
        }
    `]
  }

  constructor() {
    super()
    this.popRta = ''
  }

  render() {
    return html`
        <div class="pop-content">
        <section class="sect d-flex">
            <div class="item" @click="${this._SetRta}" id="r1">
                <h2>Pwa</h2>
            </div>
            <div class="item" @click="${this._SetRta}" id="r2" >
                <h2>Spa</h2>
            </div>
            <div class="item" @click="${this._SetRta}" id="r3">
                <h2>Native</h2>
            </div>
            </div>
        </section>
    `
  }

  _SetRta(event){
    const h2 = event.currentTarget.querySelector('h2');
    this.popRta = h2.textContent;
    console.log(this.popRta)
  }
}

window.customElements.define('pop-up', Pop)
