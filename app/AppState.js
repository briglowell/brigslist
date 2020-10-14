import Car from "./Models/Car.js"
import Home from "./Models/Home.js"
import Job from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]}*/
  cars = [new Car({make:"Honda", model: "Accord", year: 2002, price: 5000, img: "//placehold.it/200x200", description:"This is a red honda."})]
   /** @type {Home[]}*/
  homes = [new Home({model:"Victorian", year: 1929, beds: 4, baths: 3, sqft: 2200, price: 500000, img: "//placehold.it/200x200", description:"This is an old fancy house."})]

  /** @type {Job[]}*/
  jobs = [new Job({position:"Software-Dev", company: "Codeworks", age: 18, year: 2, wage: 35, img: "//placehold.it/200x200", description:"Intro position"})]
}
// new Car("Jeep", "Rango",1990, 10000, "//placehold.it/200x200", "A nice jeep")

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
