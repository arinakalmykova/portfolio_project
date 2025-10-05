document.addEventListener("DOMContentLoaded", ()=>{
    const tabs = document.getElementsByClassName('projects__tab');
    Array.from(tabs).forEach(tab => {
        tab.onclick =  (e) => {
             Array.from(tabs).forEach(t => t.classList.remove('active'));
            if(!tab.classList.contains('active')){
                tab.classList.add("active");
            }
        }
    })
})