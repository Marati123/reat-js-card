import React, { Component } from 'react';
import { Card, CardContent, CardMedia, Typography, } from '@mui/material';
import './index.css';

class CardList extends Component {
  render() {
    return (
        <div className='bgcontainer'>
      <div className="MarqueeContainer">
        <a href="https://example.com/data-engineer" className="ZoomCard">
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://res.cloudinary.com/drmukp5dw/image/upload/v1722278290/data-engineer_uknsxl.jpg"
              alt="Become a successful data engineer"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Become a successful data engineer
              </Typography>
            </CardContent>
          </Card>
        </a>

        <a href="https://coursevita.com/courses/dataScience" className="ZoomCard">
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://res.cloudinary.com/drmukp5dw/image/upload/v1722278315/1_FCoyCKFGxNMsT5BEbytr_A_bfh1ps.png"
              alt="Master Data Science"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Become a successful data scientist
              
              </Typography>
              
            </CardContent>
          </Card>
        </a>

        <a href="https://coursevita.com/courses/dataAnalytics" className="ZoomCard">
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://res.cloudinary.com/drmukp5dw/image/upload/v1722278338/data-analyst_p70twp.jpg"
              alt="Become a successful data Analyst"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Become a successful data Analyst
              </Typography>
            </CardContent>
          </Card>
        </a>

        <a href="https://coursevita.com/courses/dataVisualization" className="ZoomCard">
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://res.cloudinary.com/drmukp5dw/image/upload/v1722278372/1597242157396_lnharw.jpg"
              alt=" Become a successful data visualization expert"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Become a successful data visualization expert
              </Typography>
              <Typography variant='p' component='div'>
                Time 
              </Typography>
            </CardContent>
          </Card>
        </a>

        <a href="https://upskill.coursevita.com/python-data-analytics" className="ZoomCard">
          <Card >
            <CardMedia
              component="img"
              height="140"
              image="https://res.cloudinary.com/drmukp5dw/image/upload/v1722278428/13_tkliz0.png"
              alt=" Python for Data Analytics"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               Python for Data Analytics
              </Typography>
              <Typography component= 'span' variant='p'>24july 2024</Typography>
            </CardContent>
          </Card>
        </a>
      </div>
      </div>
    );
  }
}

export default CardList;
