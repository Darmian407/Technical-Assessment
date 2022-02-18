import React from "react"
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="App">
            <div className='Nav'>
                <img alt="envited" className='navimg' src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/009a7704-668c-4c20-8a03-6007b9bc6b56/Nav_Bar_variants.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220218T114401Z&X-Amz-Expires=86400&X-Amz-Signature=776ecf6b9904876eacc1a0544f47aef0f79a066a9600747dc901d6c094b2660a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Nav%2520Bar_landing%2520page.png%22&x-id=GetObject'></img>
            </div>
            <div className='Titles'>
                <br></br>
                <h1>Facebook events without Facebook.</h1>
                <label>Easily host and share events with your friends across any social media</label>
            </div>
            <br></br>
            <div className='Button'>
                <Link to="/create">
                    <img alt="event" className='buttonimg' src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fca5fa8e-b50a-449d-940e-53dc195d9b77/Create_event_button.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220218T120546Z&X-Amz-Expires=86400&X-Amz-Signature=c69b07b5e7fea38f48b1aee09d131ab04398182c0685642e2eab1f3d260e34c8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Create%2520event%2520button.png%22&x-id=GetObject'></img>
                </Link>
            </div>
            <div className='products'> {/* I dont have experience using background images in React, so i decided to not spend time in it, but with more time maybe i can do it*/}

                {/* also, i have problems with locate overlapping images, so I made them a rize in photoshop to to at least try another way */}

                <img alt="product" className='productleft' src='https://i.postimg.cc/Kv7NhGH5/Product-Image-Left.png'></img>
                <img alt="product" className='productmiddle' src='https://i.postimg.cc/ryD49VTp/Product-Image-Middle.png'></img>
                <img alt="product" className='productright' src='https://i.postimg.cc/28JBtPzx/Product-Image-Right.png'></img>

            </div>
        </div>
    );
}

export default Home