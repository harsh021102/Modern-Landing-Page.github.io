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
// nav bar js
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.mobile-nav');

navToggle.addEventListener('click',function(){
    // console.log(links.classList);
    if(links.classList.contains("show-links"))
    {
        // navToggle.style.transform = "rotate(0deg)";
        navToggle.classList.remove("fa-xmark");
        navToggle.classList.add("fa-bars");
        links.classList.add("hide-links")
        links.classList.remove('show-links');
    }
    else{
        // navToggle.style.transform = "rotate(90deg)";
        navToggle.classList.add("fa-xmark");
        navToggle.classList.remove("fa-bars");
        links.classList.remove("hide-links")
        links.classList.add('show-links');
    }

    // links.classList.toggle('show-links');
})