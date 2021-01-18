const mongoose = require('mongoose')

const vidliSchema = new mongoose.Schema({
    video_provider: {
        type: String,
        required: true
    },
    video_url: {
        type: String,
        required: true
    },
    favorited: {
        type: Boolean,
        default: false
    },
    video_status: {
        type: String,
        default: 'unwatched'
    }
})

module.exports = mongoose.model('Vidli', vidliSchema)