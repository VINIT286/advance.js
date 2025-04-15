async function df() {
    let ProductName=document.querySelector('#name').value
    let ProductBrand=document.querySelector('#brand').value
    let Productprice=document.querySelector('#price').value
    let image=document.querySelector('#image').value
    let obj={
       "ProductName": ProductName,
       "ProductBrand": ProductBrand,
       "ProductPrice": Productprice,
       "image": image, 
    }
    let a = await fetch('http://localhost:4000/product',{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(obj)
    })
    // let b = await a.json()
    console.log(b)
}
