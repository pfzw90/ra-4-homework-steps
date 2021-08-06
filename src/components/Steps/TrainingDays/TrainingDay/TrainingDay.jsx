import PropTypes from 'prop-types'
export default function TrainingDay(props) {

    const {id, date, steps, onDelete} = props;

    return (

    <tr className="TrainingDay">
        <td>{date}</td> 
        <td>{steps}</td>
        <td><button className="TrainingDay-remove" onClick={() => onDelete(id)} key={`${id}-button`}>X</button></td>
    </tr>

    )
}

TrainingDay.propTypes = {
    onDelete : PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    steps: PropTypes.number.isRequired
}