// eslint-disable-next-line react/prop-types
function BoxColor({r,g,b}) {
    const boxStyle = {
        backgroundColor: `rgb(${r},${g},${b})`
    }
    return ( 
        <>
        <div style={boxStyle} className="color-box" >
            <h3>rgb({r},{g},{b})</h3>
        </div>
        <div></div>
        </>
     );
}

export default BoxColor;