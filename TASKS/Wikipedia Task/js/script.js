let myjsn;



const getData=()=>{
    let inp =document.getElementById("search").value;
    fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=%22"+ inp)
.then(y=>y.json())
.then(y=>{

console.log(y)

myjsn=y

})
  
let p = myjsn.query.search.map((v)=>{
    return `<div class="item"><h3 id="title">${v.title}</h3><p>${v.snippet}</p></div>`
})
document.getElementById("result").innerHTML=p.join(" ")

}