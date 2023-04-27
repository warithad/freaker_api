const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profile: {
        displayName: {
            type: String,
            maxLength: 50,
            required: true
        },
        profilePhotoUrl: {
            type: String
        },
        headerPhotoUrl: {
            type: String
        },
        bio: {
            type: String,
            maxlength: 150
        },
        location: {
            type: String,
            maxlength: 30
        },
        website: {
            type: String,
            maxlength: 100
        }
    },
    password: {
        type: String,
    },

    followers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    following: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    tweets: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ],
    retweets: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ],
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ],
    bookmarks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ],
    verified: {
        type: Boolean,
        default: false
    },
    private: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

UserSchema.virtual('url').get(() => {
    return `api/users/${this.userName}`
})

module.exports = mongoose.model('User', UserSchema);