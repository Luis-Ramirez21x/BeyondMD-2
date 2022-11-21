import { useEffect, useState } from "react"
import { Box, Button } from "@mui/material";
import axios from 'axios';
import CoffeeCard from "./coffeeCard";
import './coffee.css'



export default function CoffeeContainer(){
    const [coffeeData, setCoffeeData] = useState({hot:{}, iced:{}})
    const [reload, triggerReload] = useState(false);

    function getRandomNum(coffeeType){
        let randomNum = 0;

        if(coffeeType === 'iced'){
            //between 1-6
            randomNum = Math.floor(Math.random() * 6) + 1;
        }else{
            //between 1-20
            randomNum = Math.floor(Math.random() * 20) + 1;
        }

        return randomNum;
    }

    useEffect(()=>{
        
        const getCoffees = async() =>{
            const hotCoffee = await axios.get("https://api.sampleapis.com/coffee/hot/" + getRandomNum("Hot"));
            const icedCoffee = await axios.get("https://api.sampleapis.com/coffee/iced/" + getRandomNum("iced"));
            setCoffeeData({hot:hotCoffee.data, iced:icedCoffee.data})
        }
        
        getCoffees()
            .catch(console.error);


    },[reload])


     return(
        <>  
        <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h1>Coffee Picks Generator!</h1>
            <Button variant="outlined" color="success" onClick={() => triggerReload(!reload)}>Re-Draw</Button>
            <div className="coffee-card-container">
                <CoffeeCard coffeeData={coffeeData.hot} temp='hot'/>
                <CoffeeCard coffeeData={coffeeData.iced} temp='cold'/> 
            </div>
        </Box>


        </>

     )
}