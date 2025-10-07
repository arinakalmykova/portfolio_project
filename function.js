document.addEventListener("DOMContentLoaded", ()=>{
    const tabs = document.getElementsByClassName('projects__tab');
    const contents=document.getElementsByClassName('projects__grid')
    Array.from(tabs).forEach(tab => {
        tab.onclick =  (e) => {
            e.preventDefault();
            Array.from(tabs).forEach(t => t.classList.remove('active'));
            if (!tab.classList.contains('active')){
                tab.classList.add('active');
            }
            const targetId = tab.getAttribute('href');
            const targetContent = document.querySelector(targetId);
            if(targetContent){
                if (!targetContent.classList.contains('active')){
                    targetContent.classList.add('active');
            }
            Array.from(contents).forEach(t => {if(t!== targetContent) t.classList.remove('active')});
            }
        }
    })
})