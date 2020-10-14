import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";

class JobsService{
  constructor(){
    console.log("hello from job service");
  }
  // apply(id, email) {
  //   let apply = parseInt(email)
  //   console.log(apply)
  //   let temp = ProxyState.jobs
  //   if(apply > 0){
  //     let job = temp.find(h=> h.id == id)
  //     job.wage += apply
  //     ProxyState.jobs = temp
  //   }
  // }
  removeJobListing(id) {
    let temp = ProxyState.jobs
    let jobIndex = temp.findIndex(h=> h.id == id)
    temp.splice(jobIndex, 1)
    ProxyState.jobs = temp
  }

  createJobListing(jobData) {
    let newJob = new Job(jobData) 
    console.log(newJob)  
    // let jobs = [...ProxyState.jobs, jobData ]
    // ProxyState.jobs = jobs
    
    // ProxyState.jobs = ProxyState.jobs.concat(new Job(jobData))

    let temp = ProxyState.jobs
    temp.push(newJob)
    ProxyState.jobs = temp
  }

}
export const jobsService = new JobsService()