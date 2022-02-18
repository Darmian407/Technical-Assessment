import './Event.css'

function Event() {
    return (
        <div className='Event'>
            <img className='eventimg' src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e0d1a17a-6dc0-435a-8ee4-422c05cbbab7/Cover_photo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220218T144628Z&X-Amz-Expires=86400&X-Amz-Signature=45e95c650ae158b03a4febc3603826deab9e8ba88a995ea9b255e55e498fbf5b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Cover%2520photo.png%22&x-id=GetObject'></img>
            <div className='title'>
                <h1>Anica's 22nd Birthday</h1>
            </div>
            <div className='products'> {/* I dont have experience using background images in React, so i decided to not spend time in it, but with more time maybe i can do it*/}

                {/* also, i have problems with locate overlapping images, so I made them a rize in photoshop to to at least try another way */}

                <img alt="going" className='productleft' src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ad119700-5d79-468a-8da3-55653d999dd3/Going_button.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220218T150243Z&X-Amz-Expires=86400&X-Amz-Signature=08a25651ba6c6448b8c6cb41954dc65763a11a56903edb1e50f70db8ce465388&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Going%2520button.png%22&x-id=GetObject'></img>
                <img alt="maybe" className='productmiddle' src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2147f5f3-e6bb-406e-9b39-4843172a75f0/Maybe_button.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220218T150255Z&X-Amz-Expires=86400&X-Amz-Signature=22ed8d52dee24a4f543f469c1a9b3e85cd7d0ae0b7eccc8995d4788db72cb5f7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Maybe%2520button.png%22&x-id=GetObject'></img>
                <img alt="notgoing" className='productright' src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fa3eb360-23d1-40c2-b607-227a1a1607ff/Not_going_button.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220218T145812Z&X-Amz-Expires=86400&X-Amz-Signature=e8785f1a102965c3bb2c7e633fbb32be839273e05281e4c00740607b8338703d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Not%2520going%2520button.png%22&x-id=GetObject'></img>

            </div>
            <div className='invite'>
                <img alt='invite' className='inviteimg' src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e8549027-c572-47f3-a49f-06e0f1dadf05/Invite_button.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220218T150613Z&X-Amz-Expires=86400&X-Amz-Signature=5c5e496dfed14fb2142169486c37c436980e9608cc8b3f080286c7deb2bfcf76&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Invite%2520button.png%22&x-id=GetObject'></img>
                <img alt='settings' className='settingsimg' src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e98196ad-c32c-4476-8f8f-c5ff4df6a2a2/Settings_button.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220218T150617Z&X-Amz-Expires=86400&X-Amz-Signature=ea40ec465846c63226d231210edce052596641fb279170eec59fab5a22339ba4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Settings%2520button.png%22&x-id=GetObject'></img>
            </div>
        </div>

    );
}

export default Event