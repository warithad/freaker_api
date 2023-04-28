const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TweetSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    text: {
        type: String
    },
    mediaUrl: {
        type: String
    },
    retweets: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tweet',
        }
    ],
    repliedTweet: {
        type: Schema.Types.ObjectId,
        ref: 'Tweet'
    }

}, {timestamps: true})

TweetSchema.virtual('url').get(() => {
    return `/tweet/${this._id}`
})

module.exports = mongoose.model('Tweet', TweetSchema)