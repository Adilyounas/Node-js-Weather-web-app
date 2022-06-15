//when i copy files (index.html data to index.hbs) to templates css folder remains in public folder in order to use it i need app.use(express.static(staticPath));

//the better option is that you first create a static website and after convert it into dynamic website

//always use one css file because of partial links options you create links of index links nav footer script etc. After that if you use further css links than its become headache

//event.preventDefault() is use to prevent page load again after submitng form i.g

// const getInfo = (event)=>{
//     event.preventDefault()
//     alert("lol")
// }

// plz make sure you define any 

// innerHtml = ` ` always use bakticks if not = valiable


const express = require('express');
const app = express();
const hbs =require('hbs')
const path = require('path')
const port = process.env.PORT || 8000 //while hosting server give it port || use 8000 instead

// console.log(path.join(__dirname, "../public"));  //for testing

const staticPath = path.join(__dirname, "../public");
const template_Path = path.join(__dirname, "../templates/views");
const partials_Path = path.join(__dirname, "../templates/partials");


app.set('view engine', 'hbs');
app.set("views", template_Path);
hbs.registerPartials(partials_Path)

app.use(express.static(staticPath));

app.get("/index",(req,res)=>{
    res.render("index")
});

app.get("/about",(req,res)=>{
    res.render("about")
});

app.get("/weather",(req,res)=>{
    res.render("weather")
});

app.get("*",(req,res)=>{
    res.render("404")
});

app.listen(port, ()=>{
    console.log(`server is listning at ${port}`)
});