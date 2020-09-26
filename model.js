const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserModel = new Schema({
    personalInfo: {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        userType: { type: String, enum: ['student', 'staff', 'independentResearcher'], required: true },
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        dob: { type: Date, required: false },
        address: { type: String, required: false },
        phone: { type: String, required: false },
        createdAt: { type: Date, default: Date.now },
        updatedAt: {type: Date, default: Date.now }
    },
    institution: {
        name: { type: String, require: true },
        type: { type: String, enum: ['undergraduate', 'msc', 'phd', 'pgde', 'nce', 'ond', 'hnd', 'others'], require: true }
    },
    research: [
        {
            title: { type: String, required: true },
            year: { type: Date, required: true },
            authors: [ 
                {
                    email: { type: String, required: true },
                    name: { type: String, required: false }
                }
            ],
            pages: [
                {
                    number:{type: Number, required: true }
                }
            ]
        }
    ],
    analytics: {
        mentions: [
            {
                researcherEmail: { type: String, required: true },
                research: { type: String, required: true },
                dateMentioned: { type: Date, required: true }
            }
        ],
        readingHistory: [
            {
                researchId: { type: String, required: true },
                totalPages: { type: Number, required: true },
                timing: [
                    {
                        currentPage: { type: Number, required: true },
                        startAt: { type: Date, required: true },
                        stoppedAt: { type: Date, required: true },
                    }
                ]
            }
        ],
        searchHistory: [
            {
                searchQuery: { type: String, required: true },
                searchDate: { type: Date, required: true }
            }
        ],
    },
    announceResearch:[
        {
            title: { type: String, required: true },
            description: { type: String, required: true },
            isOpen: {type: Boolean, default: true, required: true},
            amount: { type: Number, required:true},
            startDate: { type: Date, required: true },
            endDate: { type: Date, required: true },
            researchApllicant:[
                {
                    name: { type: String, required: false },
                    email: { type: String, required: false },
                    isApproved:{type: Boolean, default: true, required: false}
                }
            ]
        }
    ]
});

module.exports = mongoose.model('UserModel', UserModel);