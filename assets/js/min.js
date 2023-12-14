sentdata("https://forkify-api.herokuapp.com/api/search?q=pizza","pizza-section");
sentdata("https://forkify-api.herokuapp.com/api/search?q=carrot","carrot-section");
sentdata("https://forkify-api.herokuapp.com/api/search?q=corn","corn-section");
sentdata("https://forkify-api.herokuapp.com/api/search?q=potato","potato-section");
sentdata("https://forkify-api.herokuapp.com/api/search?q=tomato","tomato-section");
if(window.prompt("y/n")=='y'){
  var rid = window.prompt('input rId');
  console.log(rid);
   var result ='https://forkify-api.herokuapp.com/api/get?rId='.concat(rid);

console.log(result);
   
window.location.assign(result);

   }



  function sentdata(link,id){ 
   
    var HttpRequest=new XMLHttpRequest();  
    HttpRequest.open("GET",link);
    HttpRequest.send();
    HttpRequest.onreadystatechange = function(){
        if(HttpRequest.readyState==4){
          
           pizza = JSON.parse(HttpRequest.response).recipes ;
           PrintData(id); 
          
        }
}

    
}

 function PrintData(id){
   
    var data = "";
    for(var i=0;i<pizza.length;i++){
        
     data +=`
     <div class="col-md-4 column-gap-5 py-5 text-center">
    <img src="${pizza[i].image_url}" class="img-fluid"  style="width: 400px; height: 250px; alt="pizza">

     <h2 class="py-2">${pizza[i].publisher}</h2>
     <h3>${pizza[i].title}</h3>
     <a href="${pizza[i].source_url}" class="text-decoration-none py-2 d-block text-white">Description</a>

     <a href="${pizza[i].publisher_url}" class="read-more text-decoration-none py-2 px-2  text-white border-3">read more</a>
     
     </div>
     `;
    }
  
    document.getElementById(id).innerHTML=  data;

   
}


