import React from "react";
import PropTypes from 'prop-types'
import TrainingDayModel from '../../../models/TrainingDay'
import shortid from 'shortid'
const DEFAULT_FORM_STATE = {date: new Date().toISOString().slice(0,10) , steps: 0}
export default function StepsForm(props) {
    const {onSubmit} = props;
    const [stepsForm, setForm] = React.useState(DEFAULT_FORM_STATE);

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setForm(prev=> ({...prev, [name] : value}))
    }

    const handleAddTraining = (e) => {
        e.preventDefault();
        const form = e.target;
        const newTrainingDay = new TrainingDayModel(shortid.generate(), form.date.value, parseInt(form.steps.value));
        onSubmit(newTrainingDay);
        setForm(DEFAULT_FORM_STATE)
    }
    
    return(
    <React.Fragment>
    <form className="StepsForm" onSubmit={handleAddTraining}>
        <label htmlFor="date">Дата</label>
        <input className ="StepsForm-date" type="date" value={stepsForm.date} onChange={handleFormChange} name="date" id="date" required/>
        <label htmlFor="date">Количество шагов</label>
        <input className ="StepsForm-steps" type="number" value={stepsForm.steps} onChange={handleFormChange} name="steps" id="steps" required/>
        <button className="StepsForm-submit" type="submit">Добавить</button>
    </form>
    </React.Fragment>
    )
}

StepsForm.propTypes = {
    onSubmit : PropTypes.func.isRequired
}