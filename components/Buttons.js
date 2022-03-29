const Buttons = () => {
    return(
        <div className="btn">

            <button>Finish test</button>
            <button>Next question</button>

            <style jsx>{`
                .btn{
                    margin-top: 5%;
                    width: 100%;
                    backgrond-color: red;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                }

                .btn button{
                    padding: 1%;
                    background-color: blue;
                    border-radius: 0.3rem;
                    color: white;
                    border: none;
                    outline: none;
                }
            `}</style>
        </div>
    )
}

export default Buttons;