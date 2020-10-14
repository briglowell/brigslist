import {generateId} from "../Utils/GenerateId.js"
export default class Home{
  constructor({ model, year, beds, baths, sqft, price, img, description }){
    this.model = model
    this.year = year
    this.beds = beds
    this.baths = baths
    this.sqft = sqft
    this.price = price
    this.img = img
    this.description = description || "No description available"
    this.id = generateId() 
  }

  get Template() {
    return `<div class="col-4">
    <div class="card">
    <img class="card-img-top img-fluid" src="${this.img}" alt="">
    <div class="card-body">
        <h4 class="card-title">${this.year} ${this.model}</h4>
        <p class="card-text">Beds: ${this.beds} Baths: ${this.baths} Sqft: ${this.sqft}</p>
        <br>
        <p class="card-text">Current Price: $${this.price}</p>
        <br>
        <p> ${this.description}</p>
        <form onsubmit="app.homesController.offer('${this.id}')">
          <div class="form-group p-1">
          <input type="number"
          class="form-control" name="offer" id="offer" aria-describedby="helpId" placeholder="Offer Amount">
          </div>
          <button class="btn btn-success btn-block" type="submit" >Offer</button>
        </form>
        <button class="btn btn-danger btn-block" onclick="app.homesController.removeHomeListing('${this.id}')">Delete</button>
    </div>
    </div>
</div>`
  }

}