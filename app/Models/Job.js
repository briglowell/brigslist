import {generateId} from "../Utils/GenerateId.js"
export default class Home{
  constructor({ position, company, age, year, wage, img, description }){

    this.position = position
    this.company = company
    this.age = age
    this.year = year
    this.wage = wage
    this.img = img
    this.description = description || "No description available"
    this.id = generateId() 
  }

  get Template() {
    return `<div class="col-4">
    <div class="card">
    <img class="card-img-top img-fluid" src="${this.img}" alt="">
    <div class="card-body">
        <h4 class="card-title">${this.position}</h4>
        <h5>${this.company}</h5>
        <p>Required Experience: ${this.year}</p>
        <p class="card-text">Starting Wage: $${this.wage} /hr</p>
        <br>
        <p>${this.description}</p>
        <form onsubmit="app.jobsController.apply('${this.id}')">
          <div class="form-group p-1">
          <input type="email"
          class="form-control" name="apply" id="apply" aria-describedby="helpId" placeholder="Submit email to apply">
          </div>
          <button class="btn btn-success btn-block" type="submit" >Submit Email</button>
        </form>
        <button class="btn btn-danger btn-block" onclick="app.jobsController.removeJobListing('${this.id}')">Delete</button>
    </div>
    </div>
</div>`
  }

}