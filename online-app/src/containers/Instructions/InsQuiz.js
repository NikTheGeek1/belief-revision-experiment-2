import React from 'react';

import Button from '../../components/Button/Button';
import Classes from '../../SASS/containers/Instructions/InsQuiz.module.scss';
import vlImage from '../../static/images/vl.png';
const InsQuiz = props => {
    
    const submitAnswersHandler = () => {
        
    };

    return (
        <div className={Classes.InsQuiz}>
            <div className={Classes.InnerContainer}>
                <h1>Instructions: Comprehension quiz</h1>
                <hr />
                <p>Please answer the following questions before starting the task. These are necessary for ensuring that you
		        read and understood the instructions.</p>
                <div className={Classes.QuizContainer}>
                    <p className={Classes.Qs}><b>Questions</b></p>
                    <p className={Classes.Ts}><b>True</b></p>
                    <p className={Classes.Fs}><b>False</b></p>
                    <hr className={Classes.Hr} />
                    <img className={Classes.Vl} src={vlImage} alt="vertical line"/>
                    <input type="radio" name="1" className={Classes.T1} />
                    <input type="radio" name="1" className={Classes.F1} />
                    <input type="radio" name="2" className={Classes.T2} />
                    <input type="radio" name="2" className={Classes.F2} />
                    <input type="radio" name="3" className={Classes.T3} />
                    <input type="radio" name="3" className={Classes.F3} />
                    <input type="radio" name="4" className={Classes.T4} />
                    <input type="radio" name="4" className={Classes.F4} />
                    <input type="radio" name="5" className={Classes.T5} />
                    <input type="radio" name="5" className={Classes.F5} />
                    <input type="radio" name="6" className={Classes.T6} />
                    <input type="radio" name="6" className={Classes.F6} />
                    <li className={Classes.Q1}>1. In each condition you'll be presented with a fictional scenario involving few characters.</li>
                    <li className={Classes.Q2}>2. Your job is to judge only the main character's behaviour.</li>
                    <li className={Classes.Q3}>3. Your judgment should be based on main character's attractiveness.</li>
                    <li className={Classes.Q4}>4. In each scenario, you have the opportunity to see the beliefs of another individual to improve your judgement.</li>
                    <li className={Classes.Q5}>5. The individual knows about the motives behind the decision of the main actor.</li>
                    <li className={Classes.Q6}>6. You will only provide your belief and certainty ratings once.</li>
                </div>
                <hr />
                <br/>
                <Button clicked={submitAnswersHandler}>Next</Button>
            </div>
        </div >
    );
};

export default InsQuiz;