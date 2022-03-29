import Head from "next/head";
import Question from "../components/Question";
import { useState, useEffect } from "react";
import Buttons from "../components/Buttons";
import QuestionNumber from "../components/QuestionNumber";

const Test = () => {

    const questions = [
        {question: 'full form of cs', options: ['condom','nothing','i dont know','computer sciences'], ans: 'computer science'},
        {question: 'this is the second question', options: ['option 1', 'option 2', 'option 3'], ans: 'option 2'},
        {question: 'this is the third question', options: ['option 1', 'option 2', 'option 3', 'option 4'], ans: 'option 2'},
        {question: 'this is the fourth question', options: ['option 1', 'option 2', 'option 3', 'option 4', 'option 5'], ans: 'option 2'},
        {question: 'this is the fifth question', options: ['option 1', 'option 2', 'option 3', 'option 4', 'option 5'], ans: 'option 2'},
        {question: 'this is the sixth question', options: ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6'], ans: 'option 2'}
    ]
    const [qindex, setQindex] = useState(0)
    const [stop, setStop] = useState(true)

    useEffect(()=> {
        let timer;
        if(stop){
            timer = setTimeout(() => {
                time = calculateTime(time)
                setTime(time)
            }, 1000)    
        }
        else{
            clearInterval(timer)
        }
    })

    const handleQindex = (index) => {
        setQindex(index);        
    }

    const calculateTime = (time) => {
        const [ minutes, seconds ] = time;

        minutes = parseInt(minutes)
        seconds = parseInt(seconds)

        if(seconds === 1 && minutes === 0){
            setStop(false)
        }

        if(minutes<=10){
            minutes = `0${minutes}`;
        }

        if(seconds <= 10){
            if(seconds === 0){
                minutes -= 1;
                if(minutes <=10){
                    minutes = `0${minutes}`
                }
                seconds = 59;
            }
            else{
                seconds -= 1;
                seconds = `0${seconds}`
            }
        }
        else{
            seconds -= 1;
        }
        return [minutes, seconds]
    }
    1


    const [time, setTime] = useState(['30', '00'])

    return(
        <div className="page">
            <Head>
                <title>Questions</title>
            </Head>
            <div className="left">
                <div className="time">
                    <h1>time remaining: {time[0]} : {time[1]}</h1>
                    <h1>{qindex+1}/{questions.length}</h1>
                </div>
                <Question question={questions[qindex].question} options={questions[qindex].options}/>
                <Buttons/>    
            </div>
            <div className="right">
                <QuestionNumber length={questions.length} indexhandler={handleQindex}/>
            </div>

            <style jsx>{`
                .page{
                    width: 100%;
                    height: 100vh;
                    display: flex;
                }

                .time{
                    color: white;
                    padding: 2%;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .left {
                    padding: 2%;
                    width: 60%;
                    height: 100%;
                }

                .right{
                    width: 40%;
                    height: 100%;
                    padding: 2%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

            `}</style>
        </div>
    )
}

export default Test;