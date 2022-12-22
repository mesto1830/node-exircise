import mongoose from 'mongoose'

//if you need validation for array object please create a schema for nested
//messages otherwise create simple messages:[] without schema

const messagesSchema = new mongoose.Schema({
  userName:{type: String, required: true},
  text:{type: String, required: true}
})
const UsersSchema = new mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique: true,
    lovercase: true,
    trim:true,
    minlength:[10,'Email must be more 2 charecters!'],
    maxlength:[100,'Email must be less 100 charecters!']
  },
  name: {
    type: String, 
    required: [true, 'Name required!'], 
    unique:true,
    trim:true,
    lovercase: true,
    minlength:[3,'Name must be more 2 charecters!'],
    maxlength:[100,'Name must be less 100 charecters!']
  },
  password: {
    type: String, 
    required: [true,'Password required!'],
    minlength:[4,'Password must be less 4 charecters!'],
    maxlength:[100,'Password must be less 100 charecters!']
  },
  salery: {
    type: Number, 
    required: [true,'Salery required!'],
    min:[4,'Salery must be less 4 charecters!']
  },
  customerID: mongoose.SchemaTypes.ObjectId(),
  language: [{
    type:String, 
    reuired: true
  }],
  messages:[messagesSchema],
  messagesCount: {
    type: Number
  },
  scores:[],
  children:[],
  created_at: {
    type: Date, 
    default: Date.now()
  },
  tokens:[{
    token:{
      type:String,
      required: true
    }
  }]
})


export default  new mongoose.model('Users', UsersSchema)
