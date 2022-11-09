import react from 'react';

//const fonts = "monospace"
function Item(props) {
    console.log(props)
return <li style={{fontFamily: props.font}}> {props.text} </li>
}

export default Item;
