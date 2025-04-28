//your JS code here. If required.
let element = document.querySelectorAll('li');


element.forEach((key,i)=>{
    key.addEventListener('click',(e)=>{
        alert(`The level of the element is: ${i+1}`)
    })
})