import React from "react";

const Greetings = (props) => {
    return (
      <div>
        { props.language == "de" ? `Hallo ${props.children}` : props.language == "en" ? `Hello ${props.children}` : props.language =="es" ? `Hola ${props.children}` : props.language == "fr" ? `Bonjour ${props.children}`: `Language not available` }
      </div>
    );
}

export default Greetings;