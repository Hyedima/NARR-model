const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserModel = new Schema({
    personalInfo : {
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true },
        userType: { type: String, enum: ['student', 'staff', 'independentResearcher'], default: 'independentResearcher' },
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        dob: { type: Date, required: false},
        address: { type: String, required: false},
        about: { type: String, required: false},
        phone: { type: String, required: false},
        createdAt: { type: Date, default: 
Date.now
 },
        updatedAt: { type: Date, default: 
Date.now
 }
    },
    institution : {
        institutionName : { type: String, require: true },
        department : { type: String, require: true },
        course : { type: String, require: true },
        type : { type: String,enum: ['undergraduate', 'msc', 'phd','pgde','nce','ond','hnd','others'], require: true }
    },
    research : {
            title: { type: String, required: true },
            year: { type: Date, required: true },
            /*authors: [ 
                {
                    email: { type: String, required: true },
                    name: { type: String, required: false }
                }
            ],*/
            collaborators:[
                {
                    name: {type: String, required: false},
                    email: {type: String, required: false}
                }
            ],
            References: [ 
                {
                    author:{type: String, required: false},
                    research:{type: String, required: false},
                    caption:{type: String, required: true}
                }
            ]
    },
    analytics : {
        mentions: [
            {
                researcher: { type: String, required: true },
                research: { type: String, required: true},
                dateMentioned: {type: Date, required: true} 
            }
        ],
        readingHistory: [
            {
                research: { type: String, required: true },
                currentPage : { type: String, required: true },
                totalPages: {type: Number, required: true},
                startAt: {type: Date, required: true},
                stoppedAt: {type: Date, required: true},
            }
        ]
    },

    searchHistory: [
        {
            searchQuery: {type: String, required: true},
            /*searchStatus: {type: String, required: true, enum: ["true","false"]},*/
            searchDate: {type: Date, required: true}
        }
    ],
    //Chat Schema Data privacy Issue to be disussed.
    /*chats: [
        {
            sender: {type:String, required: true},
            message: {type: String, required: true},
            timeSent: {type: Date, required:true}
        }
    ]*/
});

module.exports = mongoose.model('UserModel', UserModel);