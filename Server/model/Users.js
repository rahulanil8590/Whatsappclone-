import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    iss : {
        type : String
    },
    nbf:{
        type : Number
    },
    aud :{
        type : String
    },
    email : {
        type: String
    },
    email_verified :{
        type : Boolean
    },
    azp : {
        type : String
    },
    exp :{
        type : Number
    },
    given_name : {
        type: String
    },
    locale :{
        type : String
    },
    jti : {
        type : String
    },
    iat :{
        type : Number
    },
    name : {
        type: String
    },
    picture :{
        type : String
    },
    sub: {
        type : String,
        require : true
    }

})


export default mongoose.model('user', UserSchema)