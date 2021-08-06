export default class TrainingDayModel {
    constructor(id, date, steps = 0) {
        this.id = id;
        this.date = date;
        this.steps = steps;
    }
}