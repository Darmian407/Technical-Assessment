import './Create.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

function Create() {
  return (
    <div className="Create">
      <div className='Nav'>
        <img alt="envited" className='navimg' src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/009a7704-668c-4c20-8a03-6007b9bc6b56/Nav_Bar_variants.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220218T114401Z&X-Amz-Expires=86400&X-Amz-Signature=776ecf6b9904876eacc1a0544f47aef0f79a066a9600747dc901d6c094b2660a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Nav%2520Bar_landing%2520page.png%22&x-id=GetObject'></img>
      </div>
      <div className='card'>

        {/* I know that the whole card needs to be edited a bit, but I preferred to spend time finishing the other parts */}

        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <h2>New Event</h2>
            <Input placeholder="Event Name"></Input>
            <Input placeholder="Host Name"></Input>
            <br></br>
            <label>Start Date</label>
            <DatePicker></DatePicker>
            <label>End Date</label>
            <DatePicker></DatePicker>
            <Input placeholder="Location Name"></Input>
            <input type="file" multiple accept="image/*" />
          </CardContent>
          <CardActions>
          <Link to="/event">
            <Button size="small">Next</Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Create