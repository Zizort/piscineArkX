import mongoose from "mongoose";

const userSchema = new mongoose.Schema( {
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture:{
        type: String,
        default: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic-00.iconduck.com%2Fassets.00%2Fprofile-circle-icon-2048x2048-cqe5466q.png&tbnid=rtdN3XGJIJyzHM&vet=12ahUKEwjYk_ast6GFAxXATaQEHUY7DMcQMygAegQIARBx..i&imgrefurl=https%3A%2F%2Ficonduck.com%2Ficons%2F180867%2Fprofile-circle&docid=8qCF3TmdBFRLtM&w=2048&h=2048&q=profile&ved=2ahUKEwjYk_ast6GFAxXATaQEHUY7DMcQMygAegQIARBx",
    },
    },{timestamps: true}
);
const User = mongoose.model('User', userSchema);

export default User;
