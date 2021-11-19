import './style.scss';

export const Message = ({ message }) => {
    return <h2>props.message: <span className="message">"{ message }"</span></h2>;
}