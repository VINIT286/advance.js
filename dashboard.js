function open1(){
    alert()
    let s = document.querySelector('#addform');
    s.style.display = "block"
}
function f(){
    let cname = document.querySelector('#cname').value;
    let cprice = document.querySelector('#cprice').value;
    let ctname = document.querySelector('#ctname').value;
    let cduration = document.querySelector('#cduration').value;
    let cdiscount = document.querySelector('#cdiscount').value;

    let obj={
        "cname":cname,
        "cprice":cprice,
        "ctname":ctname,
        "cduration":cduration,
        "cdiscount":cdiscount,
    }
    fetch('http://localhost:4000/course',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(obj)
    })
}
