const searchBtn=document.getElementById('searchBtn');
var inputSearch=document.getElementById('input');
let searchVal=inputSearch.value;


// fetch("https://api.lyrics.ovh/suggest/summer&`${searchVal}`")
// .then(res=> res.json())
// .then(data => {
//      console.log(data);
// }).catch();

// const urlApi="https://api.lyrics.ovh/";
// 'https://api.lyrics.ovh/v1/artist/title';
// summer&`${searchVal}`
// "+ inputSearch.value +"
searchBtn.addEventListener('click', ()=>{
 
// fetch(urlApi + '/suggest/' + '/summer/')
fetch("https://api.lyrics.ovh/suggest/"+ inputSearch.value +"")
 
    .then(res=> res.json())
    .then(data => {
        //  console.log(data);
        let myArr=[];

         data.data.forEach(element => {
          let title1=element['album']['title'];
          let albumBy=element['artist']['name'];

        //    document.querySelectorAll('.song').innerHTML=title1;
        //   document.getElementById('artist-1').innerHTML=albumBy;
        //     console.log(element.artist.name);
        //     console.log(element.album.title);
      
      
        
          
         
            //  console.log(element.artist.name);
             console.log(element.album.title);
          
              
            
         
         });
//  for (let i = 0; i < data.data.length; i++) {
//   var element = data.data[i];
//      console.log(element.album);
//  }
  
    
      
    }).catch();

   

})
