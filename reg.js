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

    console.log(b)
}

async function del(arg) {
    await fetch(`http://localhost:4000/registration/${arg}`,{
        method:"DELETE"
    })
    
}

async function f(){
    let data = await fetch('http://localhost:4000/registration');
    let res = await data.json();
    let o=document.querySelector('#output')
    o.innerHTML=res.map(e=>`
        <div>${e.sname}</div>
        <div>${e.email}</div>
        <div>${e.mobile}</div>
        <div>${e.pass}</div>
        <div>${e.cpass}</div>
        <button onclick="del('${e.id}')">remove </button>`).join(" ")
    
}