import { ProxyState } from "../AppState.js";
import Home from "../Models/Home.js";

class HomesService{
  constructor(){
    console.log("hello from home service");
  }
  offer(id, offerAmount) {
    let offer = parseInt(offerAmount)
    console.log(offer)
    let temp = ProxyState.homes
    if(offer > 0){
      let home = temp.find(h=> h.id == id)
      home.price += offer
      ProxyState.homes = temp
    }
  }
  removeHomeListing(id) {
    let temp = ProxyState.homes
    let homeIndex = temp.findIndex(h=> h.id == id)
    temp.splice(homeIndex, 1)
    ProxyState.homes = temp
  }

  createHomeListing(homeData) {
    let newHome = new Home(homeData) 
    console.log(newHome)  
    // let homes = [...ProxyState.homes, homeData ]
    // ProxyState.homes = homes
    
    // ProxyState.homes = ProxyState.homes.concat(new Home(homeData))

    let temp = ProxyState.homes
    temp.push(newHome)
    ProxyState.homes = temp
  }

}
export const homesService = new HomesService()