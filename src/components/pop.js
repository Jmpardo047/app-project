import { LitElement, css, html } from 'lit'
import { BootStyles } from '../bootstrap';
export class Pop extends LitElement {
  static get properties() {
    return {
        title: { type: String },
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
        }
        .item{
            height:100%;
            width:33%;
        }
    `]
  }

  constructor() {
    super()
  }

  render() {
    return html`
        <div class="pop-content">
        <section class="sect d-flex">
            <div class="item">
                <h2>Pwa</h2>
            </div>
            <div class="item">
                <h2>Spa</h2>
            </div>
            <div class="item">
                <h2>Native</h2>
            </div>
            </div>
        </section>
    `
  }


}

window.customElements.define('pop-up', Pop)
