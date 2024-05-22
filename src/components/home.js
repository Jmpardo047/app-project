import { LitElement, css, html } from 'lit'
import viteLogo from '/vite.svg'
import { BootStyles } from '../bootstrap';
import { Pages } from './pages';
export class Home extends LitElement {
  static get properties() {
    return {
      isActive: {type:Boolean}
    }
  }

  static get styles() {
    return [BootStyles,css`
    
      h1{
        font-size: 3.5em;
        text-align: center;
      }
      .logo{
        width:20em;
      }
      span{
        color: #14e2cd;
      }
      .button{
        height:3em;
        width:9em;
        font-size: 2em;
        background-image: linear-gradient(to left, #7a56f4, #14e2cd);
        border-radius:0.2em;
        cursor:pointer;
      }
      .interactive{
        transition:;
      }
    `]
  }

  constructor() {
    super()
    this.isActive = true;
  }

  render() {
    return html`${this.isActive ? html`
      <div class="interactive">
        <div class="d-flex justify-content-center mb-4">
        <img src="img/Picture1.png" class="logo" alt="init logo" />
        </div>
        <h1 class="fw-bold ">¿Cuánto cuesta desarrollar mi <span>app<span>?</h1>
        <p class="text-center fs-5 fw-medium">Calcula de forma rápida el costo para crear tu app, contestando estas sencillas preguntas.</p>
        <div class="d-flex justify-content-center">
          <div @click=${this._onClick} part="button" class="button d-flex justify-content-center align-items-center mt-4">
            Empezar
          </div> 
        </div>
      </div>`
    :
      html`<pages-p class="interactive"></pages-p>`}
    `
  }

  _onClick() {
    this.isActive = !this.isActive;
  }


}

window.customElements.define('home-page', Home)
