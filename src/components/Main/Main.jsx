import React, { useState } from 'react';
import './Main.css'

const Main = ({image, modal}) => {
  
  const listOfSix = [
    {id:1, imgUrl: 'https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg'},
    {id:2, imgUrl: 'https://www.wbcsd.org/var/site/storage/images/overview/news-insights/general/news/wbcsd-to-support-the-task-force-on-nature-related-financial-disclosures-tnfd/150706-1-eng-GB/WBCSD-to-support-the-Task-Force-on-Nature-related-Financial-Disclosures-TNFD_i1140.jpg'},
    {id:3, imgUrl: 'https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk='},
    {id:4, imgUrl: 'https://swall.teahub.io/photos/small/21-218810_beautiful-wallpapers-download-for-mobile-download-beautiful-images.jpg'},
    {id:5, imgUrl: 'https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg'},
    {id:6, imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'},
    {id:7, imgUrl: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg'},
    {id:8, imgUrl: 'https://i.pinimg.com/736x/68/3c/63/683c63704c3e94742d3ef1e83edef80a--iphone-wallpaper-wallpapers.jpg'},
    {id:9, imgUrl: 'http://ekkotek.com/MobileApps/youtubeApi/examples/images/Swan_large.jpg'},
    {id:10, imgUrl: 'https://images.indianexpress.com/2021/12/sun.jpg'},
  ]
  return (
    <main className='main'>
      <div className='main__content _container'>
        <div className='main__div4_7'>
          <div className='div4'></div>
          <img className='div7' src={image} alt="image7" />
        </div>
        <div className='main__div5'></div>
        <ul className='main__listOf6'>
        {listOfSix.map((item) => <img type="button" data-toggle="modal" data-target="#exampleModalCenter" id={item.id} className='main__itemOf6' src={item.imgUrl} alt={`image${item.id}`} onClick={(e) =>{ modal.setModal(!modal.isModal)
        modal.getImage({id:e.target.getAttribute('id'), imgUrl: e.target.getAttribute('src')})
        console.log(e.target)
        }} />)}
          {/* <li className='main__itemOf6'></li>
          <li className='main__itemOf6'></li>
          <li className='main__itemOf6'></li> */}
        </ul>
        <div className='main__div8_9'>
          <div className='main__div8'></div>
          <div className='main__div9'></div>
        </div>
      </div>
    </main>
  );
};

export default Main;