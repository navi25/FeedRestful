'use strict';

const FEED_MODEL = require("../../Constants").FEED_MODEL

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FeedSchema = new Schema({
    feed : {
        type : String,
        required : "Kindly enter the feed"
    },
    user : {
        type : String,
        required: "Kindly enter the User name"
    },
    client_id : {
        type : Number,
        required: ""
    },
    user_id:{
        type: Number,
        required:""
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }

});

module.exports = mongoose.model(FEED_MODEL,FeedSchema)