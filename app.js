// //using selectors inside the element
// const questions = document.querySelectorAll('.question');
// // console.log(questions)
// questions.forEach(function(question){
//     // console.log(question);
//     const btn = question.querySelector('.question-btn')
//     // console.log(btn);
//     btn.addEventListener("click",(event)=>{
//         console.log(event.target.value)
//         questions.forEach(function(item){
//             if(item!==question)
//             {
//                 item.classList.remove("show-text")
//             }
//         })
//         question.classList.toggle("show-text")
//     })
// })
const questions = document.querySelectorAll('.question');
questions.forEach(function(question){
    // console.log(question)
    const btn  = question.querySelector('.question-btn')
    // console.log(btn)
    btn.addEventListener("click",()=>{
        const text = question.querySelector('.q-text')
        text.classList.toggle("show-text")
        if(text.classList.contains("show-text"))
        {
            const icon = question.querySelector('i')
            console.log(icon)
            icon.classList.add("fa-chevron-down")
            icon.classList.remove("fa-chevron-right")
        }
        else
        {
            const icon = question.querySelector('i')
            console.log(icon)
            icon.classList.add("fa-chevron-right")
            icon.classList.remove("fa-chevron-down")
        }
    })
})