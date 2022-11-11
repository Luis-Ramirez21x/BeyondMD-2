import { Card, CardActionArea,CardContent, CardMedia, Stack, Typography } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export default function CoffeeCard({coffeeData, temp}){

    const {title, description, image, ingredients, id} = coffeeData;


   
    return(
        <Card sx={{ maxWidth: 345}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={image}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   {title}
                   {temp === 'cold' ? <AcUnitIcon/> : <LocalFireDepartmentIcon/>}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <br/>
                <Typography variant="body1">
                    Ingredients
                </Typography>
                    <ul>
                        {ingredients?.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}