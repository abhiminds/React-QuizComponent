import React, { Component } from 'react'
let quizData = require('./quiz_data.json')
class Quiz extends Component{
    constructor(props){
        super(props)
        this.state = {
            quiz_position: quizData
        }
    }
    render(){
        console.log(this.state.quiz_position)
        return(
            <div>
                <div className="QuizQuestion">1</div>
            </div>
        )
    }
}
export default Quiz