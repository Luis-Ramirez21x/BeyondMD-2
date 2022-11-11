import { Box, Container } from "@mui/material";
import CoffeeContainer from "../components/coffeeComponents/coffeeContainer";
import Resume from "../components/resume";



function Home(){
    return(
        <Container maxWidth="md" sx={{display:' flex', flexDirection:'column', alignItems:'center'}}>
            
            <CoffeeContainer/>
            <Resume/>
        </Container>
    
    )
}

export default Home;