import React,{Fragment,useContext} from 'react';
import reactDom from 'react-dom';
import { QuizContext } from "../Store/QuizContext";


const modalStyle={
    position:'fixed',
    top:'50%',
    left:'50%',
   transform:'translate(-50%, -50%)',
    backgroundColor:'#fff',
    padding:'50px',
    zIndex:1000,
    textAlign:'center',
    width:'500px',
   
}
const overlayStyles={
    position:'fixed',
    top:0,
    bottom:0,
    left:0,
    right:0,
    backgroundColor:'rgba(0,0,0,0.7)',
    zIndex:1000
}
function Modal(props) {
  const {setStatus} = useContext(QuizContext);
  const closeModal=()=>{
    props.setIsModalOpen(false);
    setStatus('menu');
  }
    return reactDom.createPortal(
        <Fragment>
        <div style={overlayStyles}/>
       <div className="container" style={modalStyle}>
           <h3 className='text-center'>Congrats!</h3>
           <p>You answered {props.correctAnswers} of questions correctly</p>
           <div className="container">
               <button className="btn btn-warning" onClick={closeModal}>Play Again</button>
           </div>
       </div>
       </Fragment>,document.getElementById('portal')
    )
}

export default Modal
