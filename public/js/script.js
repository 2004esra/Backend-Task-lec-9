let form = document.getElementById('form1')

const locationElement = document.getElementById('location')
const forecastElement = document.getElementById('forecast')
const latitudeElement = document.getElementById('latitude')
const longitudeElement = document.getElementById('longitude')
const errorElement = document.getElementById('error')




form.addEventListener('submit',async (e)=>{

    e.preventDefault()

    // locationElement.innerText = ''
    // forecastElement.innerText = ''
    // latitudeElement.innerText = ''
    // longitudeElement.innerText = ''
    // errorElement.innerText = ''
    // errorElement.style.display = "none"
    // locationElement.style.display = "none"
    // latitudeElement.style.display = "none"
    // longitudeElement.style.display = "none"
    // forecastElement.style.display = "none"

    weaterFunction()
    form.reset()
    
})

let weaterFunction = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weather?address='+address)
        const data = await res.json()
        
        if(data.error){
            error.innerText = data.error
            location.innerText = ''
            forecast.innerText = ''
            latitiude.innerText = ''
            longitude.innerText = ''

            // errorElement.innerText = "Error: " + data.error
            // errorElement.style.display = "block"
            // locationElement.innerText = ''
            // forecastElement.innerText = ''
            // latitudeElement.innerText = ''
            // longitudeElement.innerText = ''
            // locationElement.style.display = "none"
            // latitudeElement.style.display = "none"
            // longitudeElement.style.display = "none"
            // forecastElement.style.display = "none"
               
        }
        else {
            locationElement.innerText = "location:"+data.location
            forecastElement.innerText = `Forecast: ${data.forcast}`
            latitudeElement.innerText = `Latitude: ${data.latitude}`
            longitudeElement.innerText = `Longitude: ${data.longitude}`
            errorElement.innerText = ''

            // errorElement.innerText = ''
            // errorElement.style.display = "none"

            // locationElement.innerText = "location is : " + data.location
            // locationElement.style.display = "block"

            // setTimeout(function() { 
            //     latitudeElement.innerText = "Latitude is: " + data.latitude
            //     latitudeElement.style.display = "block"
            // }, 500);
            
            // setTimeout(function() { 
            //     longitudeElement.innerText = "Longitude is: " + data.longitude
            //     longitudeElement.style.display = "block"
            // }, 1000); 

            // setTimeout(function() { 
            //     forecastElement.innerText = "Forecast is:  " + data.forecast
            //     forecastElement.style.display = "block"
            // }, 1500); 

                

        }
    }
    catch(e){
        console.log(e)
    }
   
}


