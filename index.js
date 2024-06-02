const div =document.querySelector('div');

axios('https://fakestoreapi.com/products')
.then((response)=>{
    console.log(response.data);

    response.data.map((items)=>{

        div.innerHTML +=`<div class="card" style="width: 18rem;">
        <h3 class="card-title" id="category">${items.category} </h3>
        <img src="${items.image}" class="card-img-top" id="image" alt="...">
        <hr>
        <div class="card-body">
          <h5 class="card-title" id="title">${items.title}</h5>
          <h4 class="card-title" id="price"> Price: ${items.price}$</h4>
          <p class="card-text">${items.description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        
        `

    })

})
.catch((error)=>{
    console.log(error);

})