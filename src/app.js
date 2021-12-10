const path=require("path")
const express=require("express")
const hbs =require("hbs");
const { news } = require("./news");
const { dirname } = require("path");
const app=express();
const port = 3000


// app.use(express.static(path.join(__dirname , '../public')))


// console.log(path.join(__dirname , '../public'))

// const a=__dirname +'../public/inde.html'
app.set('view engine', 'hbs');
app.engine('html', require('hbs').__express);

// const pathHbs=path.join(__dirname ,"../tempate")
// hbs.registerPartial(pathHbs)

const partialsPath = path.join(__dirname,"../tempate")
hbs.registerPartials(partialsPath)


// app.get('/', (req, res) => {
//     res.sendFile(__dirname +"/index.html")
//   })

//   app.get('/home', (req, res) => {
//     res.sendFile(__dirname +"/home.html")
//   })
const data ={
    people: [
      {
        firstname: "Nils",
        lastname: "Knappmeier",
      },
      {
        firstname: "Yehuda",
        lastname: "Katz",
      },
    ],
    prefix: "Hello",
  }

app.get("/about" , (req, res)=>{
    res.render("about",{
        title:"about bag 2",
        data
    })
})

console.log(__dirname)
app.listen(port , ()=>{
    console.log("server staaert")
})

console.log(__dirname,"aa")


//   app.get("/mynaws",(req,res)=>{
//       res.render("item" , {
//           people
//       })
//   })


app.get('/',(req,res)=>{

    news((error,data)=>{
        if(error){
            return res.send({error})
        }
        res.render('news',{
            data:data
        })
    })
})

console.log(dirname)