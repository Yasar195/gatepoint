const Question = (props) => {

    const question = props.question;
    const options = props.options

    return(
        <div className="box">
            <div className="question">
                <h1>{question}</h1>
            </div>
            <hr/>
            <div className="options">
                {
                    options.map((option, index) => (<div key={index} className="outer">
                        <div className="option">
                            <h1 className="op">{option}</h1>
                        </div>
                    </div>))
                }
            </div>
            <style jsx>{`
                .box{
                    width: 90%;
                    height: 70%;
                    box-shadow: 3px 3px 10px black;
                    color: white;
                    padding: 2%;
                    border-radius: 15px;
                }

                .outer{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .options{
                    padding: 2%;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    width: 100%;
                    height: 80%;
                }

                .selected{
                    padding: 2%;
                    border: 2px solid blue;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .option{
                    padding: 3%;
                    border: 2px solid white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: fit-content;
                    block-size: fit-content;
                    border-radius: 1rem;
                }

                .question{
                    width: 100%;
                    height: 20%;
                    padding: 2%;
                }

                .question h1{
                    text-align: center;
                }
            `}</style>
        </div>
    )
}

export default Question;