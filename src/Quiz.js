import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'
let quizData = require('./quiz_data.json')
class Quiz extends Component{
    constructor(props){
        super(props)
        this.state = {
            quiz_position: quizData.quiz_questions[0] 
        }
    }
    render(){
    console.log(this.state.quiz_position)
        return(
            <div>
                <QuizQuestion 
                className="QuizQuestion" 
                quiz_question= {this.state.quiz_position} />
                
            </div>
        )
    }
}
export default Quiz