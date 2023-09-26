//function based component

// PascalCasing
function Message() {
    // JSX: javascript XML
    const name = 'Dom';
    return <h1> Hello {(name)?name:"world"}</h1>
}

// dont forget to export the function so its usable outside of this file
export default Message;