/* eslint-disable react/prop-types */
function IdCard({lastName, firstName, gender, height, birth, picture}) {
    return ( 
        <div className="person-card">
        <img src={picture} alt={firstName} />
        <div className="card">
            <p><span className="bold">First name: </span> {firstName} </p>
            <p><span className="bold">Last name: </span> {lastName} </p>
            <p><span className="bold">Gender: </span> {gender} </p>
            <p><span className="bold">Height: </span> {height} </p>
            <p><span className="bold">Birth: </span> {birth.toDateString()}</p>
        </div>
        </div>

     );
}

export default IdCard;