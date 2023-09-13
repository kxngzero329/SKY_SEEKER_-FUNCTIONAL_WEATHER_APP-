const searchButton = document.querySelector('#search-button');
const searchInput = document.querySelector('#search-input');
const weatherInfoContainer = document.querySelector('#weather-container')
const getWeather = async()=>{
    try { 
        
        if(searchInput.value.trim()===''){
        alert('search input can\'t be empty')
        return

    }   
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=bc74db2ba01ded79e2d775881726ae77`)
        const data = await response.json()
        const obj ={
            city: data.name,
            mainDescription: data.weather[0].description,
            temp:data.main.temp,
            country:data.sys.country,
            sunset:data.sys.sunset,
            sunrise:data.sys.sunrise,
        } 
    
    const weatherDiv = document.createElement('div')

    weatherDiv.innerHTML=`
    <h2>${obj.city}</h2>
    <div>
    
     <table>
      <tr> 
       <th>Weather</th>
       <th>Temprature</th>
       <th>Country</th>
      </tr>
      <tr>
       <td>${obj.mainDescription}</td>
       <td> ${Math.floor(obj.temp - 273.15 )}°C</td>
       <td>${obj.country}</td>
      </tr>
     </table>
    </div>
    `
  
    weatherDiv.className='weather_info'

    weatherInfoContainer.appendChild(weatherDiv)
    } catch (error) {
        alert(`${searchInput.value} is not valid location `)
        
    }
}
searchButton.addEventListener('click',getWeather)