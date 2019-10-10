const {Schema, model } = require ('mongoose');


const DevSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String, 
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
      type: Schema.Types.ObjectId,
      ref: 'Dev',
    }],
    dislikes: [{
      type: Schema.Types.ObjectId,
      ref: 'Dev',
    }],
}, {
  //createdAt -- armazena a data de criação / updatedAt -- Armazena a data da ultima alteração
    timestamps: true, 
  });

  module.exports = model('Dev', DevSchema);