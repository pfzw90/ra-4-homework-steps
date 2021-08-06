import React from 'react';
import TrainingDays from './TrainingDays/TrainingDays'
import StepsForm from './StepsForm/StepsForm'
import './Steps.css'



export default function Steps() {

    const [trainingDays, setTrainingDays] = React.useState([]);

   
    const handleAddTraining = (training) => {

        setTrainingDays(prev => {
            let newDay = true;
            prev.map(day => {
                if (day.date === training.date) {
                    day.steps += training.steps;
                    newDay = !newDay;
                }
                return day;
            });
            if (newDay) {
                prev.push(training)
                prev.sort((a, b) => new Date(b.date) - new Date(a.date));
            }
            return [...prev];
        });
    }

    const handleDayDelete = (id) => {
         setTrainingDays(prev => prev.filter(day => day.id !== id))
    }

    return (
        <div className="Steps">
        <StepsForm onSubmit={handleAddTraining}/>
        <TrainingDays days={trainingDays} onDelete={handleDayDelete}/>
        </div>
    )
}