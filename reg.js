async function vg() {
    let sname=document.querySelector('#sname').value
    let email=document.querySelector('#email').value
    let mobile=document.querySelector('#mobile').value
    let pass=document.querySelector('#pass').value
    let cpass=document.querySelector('#cpass').value
    let obj={
       "sname": sname,
       "email": email,
       "mobile": mobile,
       "pass": pass, 
       "cpass": cpass 
    }
    let a = await fetch('http://localhost:4000/registration',{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(obj)
    })
}

async function del(arg) {
    await fetch(`http://localhost:4000/registration/${arg}`,{
        method:"DELETE"
    })
    
}

function final(id){
    alert()
    let sname = document.querySelector('#sname').value;
    let email = document.querySelector('#email').value;
    let mobile = document.querySelector('#mobile').value;
    let pass = document.querySelector('#pass').value;
    let cpass = document.querySelector('#cpass').value;
    let obj={
        "sname": sname,
        "email": email,
        "mobile": mobile,
        "pass": pass, 
        "cpass": cpass 
    }
    fetch(`http://localhost:4000/registration/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(obj)
    });
}

async function up(id) {
    let reg = await fetch(`http://localhost:4000/registration/${id}`);
    let res = await reg.json();
    let ui = `<form>
    <input type="text" id="sname" value="${res.sname}">
    <input type="text" id="email" value="${res.email}">
    <input type="text" id="mobile" value="${res.mobile}">
    <input type="text" id="pass" value="${res.pass}">
    <input type="text" id="cpass" value="${res.cpass}">
    <button onclick="final('${id}')">update </button>
    </form>`
    let fo = document.querySelector('#form');
    fo.innerHTML=ui
}

async function f(){
    let reg = await fetch('http://localhost:4000/registration');
    let res = await reg.json();
    let o=document.querySelector('#output')
    o.innerHTML=res.map(e=>`
        <div>${e.sname}</div>
        <div>${e.email}</div>
        <div>${e.mobile}</div>
        <div>${e.pass}</div>
        <div>${e.cpass}</div>
        <button onclick="del('${e.id}')">remove </button>
        <button onclick="up('${e.id}')">update</button>`).join(" ")
}