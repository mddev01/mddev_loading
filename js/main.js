let elImg = document.querySelector('.gif')
setTimeout(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> res.json())

    .then((data)=> {
        console.log(data);
        elImg.style.display = 'none'
    })
},2000)