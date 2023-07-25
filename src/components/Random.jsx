// eslint-disable-next-line react/prop-types
function Random({number1, number2}) { {
        return (
            <div>
                <div className="random-card1">
                    <p className="nr1">Random value between 1 and 6 ={'>'} {number1}</p>
                </div>
                <div className="random-card2">
                    <p className="nr2">Random value between 1 and 100 ={'>'} {number2}</p>
                </div>
            </div>
          );
    }

}

export default Random;