import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */



export class MyCard extends LitElement {

  

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = " ";
    this.imageUrl = " ";
    this.text = " ";
    this.button = " "
  }

  static styles = css`
    .card {
    width: 400px;
    border-radius: 5px;
    border: 8px solid black;
    background-color: grey;
    text-align: center;
    padding: 8px 16px;
    margin: 16px;
    }

    img{
    width: 400px;
    height: auto;
    padding: 8px;  
    }

    #details
    {
      background-color: pink;
      color: green;
      border-color: white;
      border-radius: 24px;
      font-size: 50px;
      padding: 8px;
      margin: 10% 25%;
      `;
  
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
  <div class="card">
   <img src="${this.imageUrl}" >
    <h1 class="card-title">${this.title}</h1> 
    <p class ="card-text">${this.text}</p> 
    <button id="details">${this.button}</button>
  </div>`;
  
  }

  static get properties() {
    return {
      title: { type: String },
      button: { type: String },
      imageUrl: {type: String},
      text: {type: String},
     
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
