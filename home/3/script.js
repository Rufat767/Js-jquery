let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inp = document.querySelector("input");
  fetch(`https://source.unsplash.com/random/900×700/?${inp.value}`).then(
    (response) => {
      document.querySelector("img").src = response.url;
    }
  );
});

let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=8380323d23e7791488a03208c53708f0`
  )
    .then((response) => {
      response.json()
        .then((data) => {
          console.log(data);
          let hav =`
                    <tr>
                           <th scope="col">base</th>
                           <th scope="col">clouds</th>
                           <th scope="col">all</th>
                           <th scope="col">cod</th>
                           <th scope="col">coord</th>
                           <th scope="col">lat</th>
                           <th scope="col">lon</th>
                         <th scope="col">dt</th>
                         <th scope="col">id</th>
                         <th scope="col">main</th>
                         <th scope="col">feels_like</th>
                         <th scope="col">humidity</th>
                         <th scope="col">pressure</th>
                       <th scope="col">temp</th>
                       <th scope="col">temp_max</th>
                         <th scope="col">temp_min</th>
                         <th scope="col">name</th>
                         <th scope="col">sys</th>
                         <th scope="col">country</th>
                       <th scope="col">id</th>
                       <th scope="col">sunrise</th>
                       <th scope="col">sunset</th>
                       <th scope="col">type</th>
                       <th scope="col">timezone</th>
                       <th scope="col">visibility</th>
                       <th scope="col">weather</th>
                     <th scope="col">wind</th>
                     <th scope="col">deg</th>
                     <th scope="col">speed</th>
                    </tr>`;
          for (let i = 0; i < data.length; i++) {
            data += `
                         <tr>
                         <th scope="row">${i + 1}</th>
                         <th scope="row">${data[i].base}</th>
                         <td>${data[i].clouds}</td>
                         <td>${data[i].clouds.all}</td>
                         <td>${data[i].cod}</td>
        
                         <td>${data[i].coord.lat}</td>
                         <td>${data[i].coord.lon}</td>
        
                         <td>${data[i].dt}</td>
                         <td>${data[i].id}</td>
                         
                         <td>${data[i].main.feels_like}</td>
                         <td>${data[i].main.humidity}</td>
                         <td>${data[i].main.pressure}</td>
                         <td>${data[i].main.temp}</td>
                         <td>${data[i].main.temp_max}</td>
                         <td>${data[i].main.temp_min}</td>
        
                         <td>${data[i].name}</td>
        
                         <td>${data[i].sys.country}</td>
                         <td>${data[i].sys.id}</td>
                         <td>${data[i].sys.sunrise}</td>
                         <td>${data[i].sys.sunset}</td>
                         <td>${data[i].sys.type}</td>
        
                         <td>${data[i].timezone}</td>
        
                         <td>${data[i].visibility}</td>
        
                         <td>${data[i].weather}</td>
        
                         <td>${data[i].wind.deg}</td>
                         <td>${data[i].wind.speed}</td>
        
                       </tr>`;
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});
