import './reset.css'

import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {
  const [modalImg, setModalImg] = useState({})
  const [isModal, setModal] = useState(false);
  const images = [
    'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg',
    'https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=',
    'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
  ]
  const getImage = (img) => {
    setModalImg({...img})
  }
  return (
    <div className="App">
      {/* <div className={`modalBackground ${isModal && 'modalBackground_active'}`}></div>
      <div className={`modalWindow ${isModal && 'modalWindow_active'}`}>
        <span>{modalImg.id}</span>
        <img src={modalImg.imgUrl} alt=""/>
      </div> */}
      {/* <!-- Button trigger modal --> */}
{/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button> */}

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">{modalImg.id}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        {/* <span>{modalImg.id}</span> */}
        <img className='modalImg' src={modalImg.imgUrl} alt=""/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      <Header image={images[0]}/>
      <Main modal={{isModal, setModal, getImage}} image={images[1]}/>
      <Footer image={images[2]}/>
    </div>
  );
}

export default App;
