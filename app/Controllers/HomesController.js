import { ProxyState } from "../AppState.js"
import {homesService} from "../Services/HomesService.js"

function _draw(){
  let homes = ProxyState.homes
  let template = ""
  homes.forEach(h=> template += h.Template)
  document.getElementById("homes").innerHTML = template
}

export default class homesController{
  constructor(){
    console.log("homes controller")
    console.log(ProxyState.homes)
    _draw()
    ProxyState.on("homes", _draw)
  }

  toggleVisibility(){
    document.getElementById("car-listings").classList.add("hidden")
    document.getElementById("home-listings").classList.remove("hidden")
    document.getElementById("job-listings").classList.add("hidden")
  }

  createHomeListing(){
    event.preventDefault();
    console.log("home creating")
    let form = event.target
    console.log(form)
    let homeData = {
      // @ts-ignore
      year: form.hyear.value,
      // @ts-ignore
      model: form.hmodel.value,
      // @ts-ignore
      beds: form.hbeds.value,
      // @ts-ignore
      baths: form.hbaths.value,
      // @ts-ignore
      sqft: form.sqft.value,
      // @ts-ignore
      price: parseInt(form.hprice.value),
      // @ts-ignore
      description: form.hdescription.value,
      // @ts-ignore
      img: form.himg.value
    }
    console.log(homeData)
    homesService.createHomeListing(homeData)
  }

  removeHomeListing(id){
    homesService.removeHomeListing(id)
  }

  offer(id){
    event.preventDefault();
    let form = event.target
    // @ts-ignore
    console.log(form.offer.value)
    // @ts-ignore
    let offer = form.offer.value
    homesService.offer(id, offer)
  }
}