import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { modalUnstyledClasses } from '@mui/material';

function BlogCard(props) {
    return (
            <Card sx={{ marginLeft:12, marginTop:5 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={props.image}
                    title={props.title}
                    //image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    //title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            );
}

const BlogData = [
    {
        Name: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, necessitatibus",
        Title: "Deneme",
        Image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
        Content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam alias enim illum aliquid id, animi soluta distinctio veritatis rerum natus. Reprehenderit eos quos aliquam repudiandae."
    },
    {
        Name: "Deneme",
        Title: "Deneme",
        Image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
        Content: "Deneme"
    },
    {
        Name: "Deneme",
        Title: "Deneme",
        Image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
        Content: "Deneme"
    }
]

export default function Blog() {
    return (
        <>
        {
            BlogData.map(data => {
                return <BlogCard 
                    name={data.Name} 
                    title={data.Title}
                    image={data.Image}
                    content={data.Content}
                />
                })
        }
        </>
    )
}