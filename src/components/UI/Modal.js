import { Fragment } from 'react';
import classes from './Modal.module.css'
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>
    <div className={classes.cotent}>{props.children}</div>
  </div>
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return <Fragment>
    {/* <Backdrop /> 
    <ModalOverlay>{props.children}</ModalOverlay> */}
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
  </Fragment>
}
export default Modal;