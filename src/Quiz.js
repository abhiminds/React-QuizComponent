import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'
let quizData = require('./quiz_data.json')
class Quiz extends Component{
    constructor(props){
        super(props)
        this.state = {
            quiz_position: quizData.quiz_questions[0] 
        }
    }
    render(){
        const isQuizEnd = false;
        console.log(isQuizEnd)
        return(
            <div>
                {isQuizEnd ? <QuizEnd /> : <QuizQuestion 
                className="QuizQuestion" 
                quiz_question= {this.state.quiz_position} />}
                
                
                
            </div>
        )
    }
}
export default Quiz