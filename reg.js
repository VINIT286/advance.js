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
    let a = await fetch('http://localhost:4000/userData',{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(obj)
    })

    window.location.href = "./login.html"
}



