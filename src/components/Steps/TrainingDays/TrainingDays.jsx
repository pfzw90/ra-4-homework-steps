import React from 'react'
import TrainingDay from './TrainingDay/TrainingDay'
import TrainingDayModel from '../../../models/TrainingDay'
import PropTypes from 'prop-types'

export default function TrainingDays(props) {
    const {days, onDelete} = props;

    return(
        <table className="TrainingDays" key="TrainingDays">
            <tbody>
            <tr className="TrainingDays-header">
                <th>Дата</th>
                <th>Количество шагов</th>
                <th>Редактирование</th>
            </tr>
        
            {days.map((day) => (
                <TrainingDay id={day.id} date={day.date} steps={day.steps} onDelete={onDelete} key={day.id}/>
                ))}
            </tbody>
        </table>
    )
}


TrainingDays.propTypes = {
    onDelete : PropTypes.func.isRequired,
    days: PropTypes.arrayOf(PropTypes.instanceOf(TrainingDayModel)).isRequired
}