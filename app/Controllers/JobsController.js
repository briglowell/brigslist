import { ProxyState } from "../AppState.js"
import {jobsService} from "../Services/jobsService.js"

function _draw(){
  let jobs = ProxyState.jobs
  let template = ""
  jobs.forEach(h=> template += h.Template)
  document.getElementById("jobs").innerHTML = template
}

export default class jobsController{
  constructor(){
    console.log("jobs controller")
    console.log(ProxyState.jobs)
    _draw()
    ProxyState.on("jobs", _draw)
  }

  toggleVisibility(){
    document.getElementById("car-listings").classList.add("hidden")
    document.getElementById("home-listings").classList.add("hidden")
    document.getElementById("job-listings").classList.remove("hidden")
  }
  createJobListing(){
    event.preventDefault();
    console.log("job creating")
    let form = event.target
    console.log(form)
    let jobData = {
      // @ts-ignore
      position: form.position.value,
      // @ts-ignore
      company: form.company.value,
      // @ts-ignore
      age: form.age.value,
      // @ts-ignore
      year: form.jyear.value,
      // @ts-ignore
      wage: parseInt(form.wage.value),
      // @ts-ignore
      description: form.jdescription.value,
      // @ts-ignore
      img: form.himg.value
    }
    console.log(jobData)
    jobsService.createJobListing(jobData)
  }

  removeJobListing(id){
    jobsService.removeJobListing(id)
  }

  apply(id){
    event.preventDefault();
    let form = event.target
    // @ts-ignore
    console.log(form.apply.value)
    // @ts-ignore
    let apply = form.apply.value
    window.alert("Thank you for your application. An email will be sent shortly to " + apply);
    // jobsService.apply(id, apply)
  }
}