export class ExerciseType {
    constructor(obj: ExerciseType) {
        this.name = obj.name;
    }

    name: string;
    required: boolean = true;
    createdAt: string;
}
