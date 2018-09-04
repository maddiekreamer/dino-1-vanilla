let jobForm = document.querySelector('.job-form')
let jobListings = document.querySelector('#job-listings')

document.addEventListener('DOMContentLoaded', function () {
    jobForm.submit.addEventListener('click', function (e) {
        e.preventDefault()
        postJob()
    })
    fetch('https://dino-1-server.herokuapp.com/')
        .then(result => result.json())
        .then(result => {
            result.forEach(element => createPosting(element))
        })
})

function postJob() {
    let job = {
        'title': jobForm.title.value,
        'pay': jobForm.pay.value,
        'description': jobForm.description.value,
        'interested': [0]
    }
    createPosting(job)
}

function createPosting(job) {
    newJob = document.createElement('li')
    jobTitle = document.createElement('h4')
    jobPay = document.createElement('small')
    jobDesc = document.createElement('p')
    jobInt = document.createElement('small')
    jobTitle.textContent = job.title
    newJob.append(jobTitle)
    jobPay.textContent = job.pay
    newJob.append(jobPay)
    jobDesc.textContent = job.description
    newJob.append(jobDesc)
    jobInt.textContent = `${job.interested.length} Dino(s) are curious about this career.`
    newJob.append(jobInt)
    jobListings.append(newJob)
}