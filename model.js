const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    otherNames: { type: String, required: false},
    phone: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true},
    bio: { type: String, required: false},
    image: { type: String, required: false},
    institution: {
        name: { type: String, required: true},
        city: { type: String, required: true},
        address: { type: String, required: false},
        department: { type: String, required: true}
    },
    research:{
        title: { type: String, required: true},
        author: { type: String, required: true},
        isbn: { type: String, required: true},
        content: { type: String, required: true},
        createdAt: { type: Date, required: true}
    }
});

mongoose.model('User', UserSchema);