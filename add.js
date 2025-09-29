let ul = document.querySelector('.ul')
let inp = document.querySelector('.inp')
let hidden = document.querySelector('.hidden')

let request = new XMLHttpRequest()

request.addEventListener('readystatechange', ()=>{
    if(request.readyState == 4){
        let data = JSON.parse(request.responseText)
        
        data.forEach((item)=>{
            ul.innerHTML += 
            `<ol class="card">
            <img src ="${item.flags.png}" />
            <h3>${item.name.common}</h3>
            </ol>`
        })}
})

inp.addEventListener('input', ()=>{
    let card = document.querySelectorAll('.card')
    let val = inp.value

    card.forEach((item)=>{
if(item.lastElementChild.textContent.toLowerCase().includes(val)){
item.classList.remove('hidden')

}else{item.classList.add('hidden')}

})
})
 

request.open('GET', 'https://restcountries.com/v3.1/all?fields=name,flags')
request.send()


console.log(request);