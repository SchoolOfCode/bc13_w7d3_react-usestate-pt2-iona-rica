import react from "react";

//const fonts = "monospace"

// function Item(props) {
//     console.log(props)
// return <li style={{fontFamily: props.font}}> {props.text} </li>
// }

function Item({ userText, font }) {
  return <li style={{ fontFamily: `${font}` }}>{userText}</li>;
}

export default Item;
