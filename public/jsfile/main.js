


let inputTextEl = document.querySelector('#input-text');
let submitBtnEl = document.getElementById('submitBtn');
let getOutPutEl = document.getElementById('getoutputhere');
let inputVal= "" //plz define a variable empty and than use it in function plz 

// date , time , city name , degree , image........................

let dayEl = document.querySelector('.day');
let dateEl = document.querySelector('.date');
let monthEl = ""
let locationEl = document.querySelector('.location');
let countryEl = document.querySelector('.country');
let gujranwalaEl = document.querySelector('.gujranwala');


let cloudEl = document.querySelector('.cloud');
let tempEl = document.querySelector('.Tempa');

// const getInfo = (event)=>{
//     event.preventDefault()
//     getOutPutEl.innerText = inputVal
//     console.log(getOutPutEl)
// }



///////////////////////////////////////////////////////////

const basicInfo =()=>{
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let date = new Date()
    monthEl = month[date.getMonth()]  //october
    dayEl.innerText = weekday[date.getDay()] //sunday
    console.log(monthEl)
    let twelve = date.getDate();
    dateEl.innerText = `${twelve} | ${monthEl}`
   

}

basicInfo()


//////////////////////////////////////////////

const getInfo = async(event)=>{
    event.preventDefault()
    inputVal = inputTextEl.value;
    
    if(inputVal === ""){
        getOutPutEl.innerText = "Enter City Name"
    }else{

        
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&appid=23023689f754c758f5fdb16bd8fb4041`
            let responseUrl = await fetch(url);
            let jsonData = await responseUrl.json();
            let temperatureVal = await jsonData.main.temp;
            tempEl.innerText = temperatureVal
            console.log(temperatureVal);

            let locationVal = await jsonData.name;
            gujranwalaEl.innerText = `${locationVal} , `
            console.log(locationVal);


            let countryVal = await jsonData.sys.country;
            countryEl.innerText = countryVal
            console.log(countryVal);

            let cloudVal = await jsonData.weather[0].main;

            if(cloudVal == "Clear"){
                // cloudEl.innerHTML = `<i class="fa-solid fa-sun-bright" style="color: #fff;"></i>`      
                cloudEl.innerHTML = `Clear`

            }else if(cloudVal == "Rain"){
                cloudEl.innerHTML = `Rain`
            }else if(cloudVal == "Clouds"){
                cloudEl.innerHTML = `Clouds`
            }else if(cloudVal == "Sun"){
                cloudEl.innerHTML = `Sun`
            }else{
                cloudEl.innerHTML = `Clear`
            }


        }catch{
            getOutPutEl.innerText = `Plz Enter Valid City Name`;

        }

    }
}

submitBtnEl.addEventListener('click',getInfo);

