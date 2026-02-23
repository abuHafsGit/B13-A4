
let InterviewList = [];
let RejectedList = [];
let currentStatus = 'all'

let total = document.getElementById('total')
let total_2 = document.getElementById('total-2')
let InterviewCount = document.getElementById('InterviewCount')
let RejectedCount = document.getElementById('RejectedCount')

let all_btn = document.getElementById('all_btn')
let Interview_btn = document.getElementById('Interview_btn')
let Rejected_btn = document.getElementById('Rejected_btn')

const mainContainer = document.querySelector('main')
const all_jobs = document.getElementById('all_jobs')
const filtered_section = document.getElementById("filtered-section")
const noJobs = document.getElementById("noJobs")

//count function
const calculateCount = () => {
    total.innerText = all_jobs.children.length
    total_2.innerText = all_jobs.children.length
    InterviewCount.innerText = InterviewList.length
    RejectedCount.innerText = RejectedList.length
}

RejectedList.length + "of"
InterviewList.length + 'of'

calculateCount()

//button toggleStyle

const toggleStyle = (id) => {
    all_btn.classList.add('bg-white', 'text-black')
    Interview_btn.classList.add('bg-white', 'text-black')
    Rejected_btn.classList.add('bg-white', 'text-black')

    //
    all_btn.classList.remove('bg-black', 'text-white')
    Interview_btn.classList.remove('bg-black', 'text-white')
    Rejected_btn.classList.remove('bg-black', 'text-white')

    //only this button
    const selectedBtn = document.getElementById(id)

    selectedBtn.classList.remove('bg-white', 'text-black')
    selectedBtn.classList.add('bg-black', 'text-white')

    currentStatus = id

    //hidden post
    if (id == 'Interview_btn') {
        all_jobs.classList.add('hidden')
        // filtered_section.classList.remove('hidden')
        if (InterviewList.length == 0) {
            noJobs.classList.remove('hidden')
            filtered_section.classList.add('hidden')
        } else {
            noJobs.classList.add('hidden')
            filtered_section.classList.remove('hidden')
            // renderingInterview()
        }
        renderingInterview()
        total_2.innerText = InterviewList.length + ' of ' + all_jobs.children.length

    } else if (id == 'all_btn') {
        all_jobs.classList.remove("hidden")
        filtered_section.classList.add('hidden')
        noJobs.classList.add("hidden")
        if (all_jobs.children.length === 0) {
            noJobs.classList.remove("hidden")
        }
        total_2.innerText = all_jobs.children.length

    } else if (id == 'Rejected_btn') {
        filtered_section.classList.add('hidden')
        if (RejectedList.length == 0) {
            noJobs.classList.remove('hidden')
            all_jobs.classList.add('hidden')

        } else {
            all_jobs.classList.add('hidden')
            noJobs.classList.add('hidden')
            filtered_section.classList.remove('hidden')
            // renderingRejectedList()

        }
        renderingRejectedList()
        total_2.innerText = RejectedList.length + ' of ' + all_jobs.children.length
    }

}


//add eventlisner maincontainer

mainContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('Interview_btn')) {
        console.log('main container')
        const parentNode = event.target.parentNode.parentNode
        const job_title = parentNode.querySelector('.job-title').innerText
        const job_name = parentNode.querySelector('.job-name').innerText
        const job_salary = parentNode.querySelector('.job-salary').innerText
        const job_status = parentNode.querySelector('.job-status').innerText
        const job_description = parentNode.querySelector('.job-description').innerText

        parentNode.querySelector('.job-status').innerText = 'Interview'

        const jobInfo = {
            job_title, job_name, job_salary, job_status: 'Interview', job_description
        }

        // job exit
        const jobExits = InterviewList.find(item => item.job_name == jobInfo.job_name)
        if (!jobExits) {
            InterviewList.push(jobInfo)
        }

        RejectedList = RejectedList.filter(item => item.job_name != jobInfo.job_name)

        //count Interview

        if (currentStatus == "Rejected_btn") {
            renderingRejectedList()
            console.log("interviw staus")
        }
        calculateCount()

    } else if (event.target.classList.contains('Rejected_btn')) {
        console.log('main container')
        const parentNode = event.target.parentNode.parentNode
        const job_title = parentNode.querySelector('.job-title').innerText
        const job_name = parentNode.querySelector('.job-name').innerText
        const job_salary = parentNode.querySelector('.job-salary').innerText
        const job_status = parentNode.querySelector('.job-status').innerText
        const job_description = parentNode.querySelector('.job-description').innerText

        parentNode.querySelector('.job-status').innerText = 'Rejected'

        const jobInfo = {
            job_title, job_name, job_salary, job_status: 'Rejected', job_description
        }

        const jobExits = RejectedList.find(item => item.job_name == jobInfo.job_name)
        if (!jobExits) {
            RejectedList.push(jobInfo)
        }

        InterviewList = InterviewList.filter(item => item.job_name != jobInfo.job_name)

        if (currentStatus == 'Interview_btn') {
            renderingInterview()
            console.log("reject staus")
        }
        calculateCount()

    } else if (event.target.classList.contains('deleteItem')) {
        const parentNode = event.target.parentNode.parentNode.parentNode
        parentNode.remove()
        console.log(parentNode)
        calculateCount()


    } else if (event.target.classList.contains('Rejected_btn')) {
        const parentNode = event.target.parentNode.parentNode.parentNode
        parentNode.remove()
        console.log(parentNode)
        calculateCount()


    }

})


//rendering rendering Interview

const renderingInterview = () => {
    filtered_section.innerHTML = ''

    //creaating innerMTML
    for (const Interview of InterviewList) {
        console.log(Interview)

        // crate a div 
        let div = document.createElement('div')
        div.className = ''
        div.innerHTML = `
        <div class="bg-white p-4 rounded-md  border-gray-400 border-[2px] flex justify-between">
                <div class="space-y-3">
                    <div>
                        <h2 class="text-[#002C5C] text-[18px] font-semibold job-title ">${Interview.job_title}</h2>
                        <p class="text-[#64748B] text-base job-name ">${Interview.job_name}</p>
                    </div>
                    <p class="text-[#64748B] text-[14px] job-salary">${Interview.job_salary}</p>
                    <div class="space-y-2">
                        <button class="py-2 px-3 bg-[#EEF4FF] rounded-md text-[#002C5C] text-[14px] job-status">${Interview.job_status}</button>
                        <p class="text-[#323B49] job-description">${Interview.job_description}</p>
                    </div>
                    <div class=" flex gap-3 ">
                        <button
                            class=" Interview_btn py-2 px-3 border border-[#10B981] bg-white rounded-md font-semibold text-[14px] text-[#10B981] uppercase cursor-pointer">Interview</button>
                        <button
                            class="  Rejected_btn py-2 px-3 bg-white border border-[#EF4444] rounded-md font-semibold text-[14px] text-[#EF4444] uppercase cursor-pointer">Rejected</button>
                    </div>
                </div>
                <div>
                    <div
                        class=" w-10 h-10 border-[2px] border-gray-400 rounded-full flex justify-center items-center cursor-pointer">
                        <img class="deleteItem w-5 h-5" src="./asstes/Delete.png" alt="">
                    </div>
                </div>
            </div>
        `
        filtered_section.appendChild(div)
    }
}


// rendering RejectedList
const renderingRejectedList = () => {
    filtered_section.innerHTML = ''

    //creaating innerMTML
    for (const Rejected of RejectedList) {
        console.log(Rejected)

        // crate a div 
        let div = document.createElement('div')
        div.className = ''
        div.innerHTML = `
        <div class="bg-white p-4 rounded-md  border-gray-400 border-[2px] flex justify-between">
                <div class="space-y-3">
                    <div>
                        <h2 class="text-[#002C5C] text-[18px] font-semibold job-title ">${Rejected.job_title}</h2>
                        <p class="text-[#64748B] text-base job-name ">${Rejected.job_name}</p>
                    </div>
                    <p class="text-[#64748B] text-[14px] job-salary">${Rejected.job_salary}</p>
                    <div class="space-y-2">
                        <button class="py-2 px-3 bg-[#EEF4FF] rounded-md text-[#002C5C] text-[14px] job-status">${Rejected.job_status}</button>
                        <p class="text-[#323B49] job-description">${Rejected.job_description}</p>
                    </div>
                    <div class=" flex gap-3 ">
                        <button
                            class=" Interview_btn py-2 px-3 border border-[#10B981] bg-white rounded-md font-semibold text-[14px] text-[#10B981] uppercase cursor-pointer">Interview</button>
                        <button
                            class="  Rejected_btn py-2 px-3 bg-white border border-[#EF4444] rounded-md font-semibold text-[14px] text-[#EF4444] uppercase cursor-pointer">Rejected</button>
                    </div>
                </div>
                <div>
                    <div
                        class=" w-10 h-10 border-[2px] border-gray-400 rounded-full flex justify-center items-center cursor-pointer">
                        <img class="deleteItem w-5 h-5" src="./asstes/Delete.png" alt="">
                    </div>
                </div>
            </div>
        `
        filtered_section.appendChild(div)
    }
}







