import React from 'react';
import './Challenge.css';
import questionsFromQuestBank from './questbank.js';
import QuestionBox from './QuestionBox.js';
import Result from './Results.js';

class Challenge extends React.Component {
    state = {
        questions: questionsFromQuestBank,
        score: 0,
        responses: 0,
    };

    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        });
    }
    playAgain = () => {
        this.setState({
            score: 0,
            responses: 0,
        })
    }

    render() {
        return (
            <div className="challenge-container">
                <h1>Challenge</h1>
                    {this.state.responses < 5 && 
                        this.state.questions.map (
                        ({ question, answers, correct, questionID }) => (
                            <QuestionBox 
                                question={question} 
                                options={answers} 
                                key={questionID}
                                selected={answer => this.computeAnswer(answer, correct)}
                            />
                        )
                )}

                {this.state.responses === 5 ? (
                    <Result score={this.state.score} playAgain={this.playAgain} />
                ) : null}
            </div>
        );
    }
}


export default Challenge;