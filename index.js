const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json())

const userData = {
    username: "cookie",
    rank: 63,
    score: 69840,
    totalScore: 110000,
    wins: 44,
    scorePerMin: 592,
    killsPerMin: 0.60,
    weapons: 134,
    totalWeapons: 185,
    kits: 46,
    totalKits: 64,
    vehicles: 77,
    totalVehicles: 182,
    medals: 11,
    totalMedals: 54,
    assignments: 21,
    totalAssignments: 110,
    dogtags: 357,
    totalDogtags: 720,
    };

const battlepacks = [
      { title: 'WEAPONS', current: 134, total: 185 },
      { title: 'KITS', current: 46, total: 64 },
      { title: 'VEHICLES', current: 77, total: 182 },
      { title: 'MEDALS', current: 11, total: 54 },
      { title: 'ASSIGNMENTS', current: 21, total: 110 },
      { title: 'DOG TAGS', current: 357, total: 720 },
       
    ];
  

  const achivements =[
    {   
        id :1,
        tool:"TOP VEHICLE",
        name: "Main Battle Tank",
        kills: 33,
        image: "https://res.cloudinary.com/dhtdkkae1/image/upload/v1712335017/soldier__tank-white_1st_img_l0rpqy.png" // Replace with actual URL later
      },
      {
        id :2,
        tool:"TOP PRIMARY",
        name: "ACW-R",
        kills: 495,
        image: "https://res.cloudinary.com/dhtdkkae1/image/upload/v1712335116/acw-white_2nd_img_cugjzf.png" // Replace with actual URL later
      },
      {
        id :3,
        tool:"TOP CLASS",
        name: "Engineer",
        score: 828514,
        image: "https://res.cloudinary.com/dhtdkkae1/image/upload/v1712335260/engineer-white_3rd_img_wdwsvq.png" // Replace with actual URL later
      },
      {
        id :4,
        tool :"TOP SIDEARM",
        name: "M9",
        kills: 112,
        image: "https://res.cloudinary.com/dhtdkkae1/image/upload/v1712335312/m9-white_4th_img_ahe5qm.png" // Replace with actual URL later
      }
]

const port = 4000;

app.get("/user", (req,res)=>{
    res.send(userData)

})

app.get('/achivements',(req,res)=>{

    res.send(achivements)
})

app.get('/battlepacks',(req,res) =>{

     res.send(battlepacks)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });