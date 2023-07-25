// eslint-disable-next-line react/prop-types
function Greetings({lang}) {
if(lang === 'de') {
    return (
        <div className="greeting-card">
            <h2>Hallo</h2>
        </div>
    );
} else if(lang === 'fr') {  
    return (
        <div className="greeting-card">
            <h2>Bonjour</h2>
        </div>
    )
} else if(lang === 'es') {
    return (
        <div className="greeting-card">
        <h2>Hola</h2>
    </div>
    )

}

}

export default Greetings;