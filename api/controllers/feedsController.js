'use strict';

const FEED_MODEL = require("../../Constants").FEED_MODEL

var mongoose = require('mongoose'),
    Feed = mongoose.model(FEED_MODEL);

exports.list_all_feeds = function(req, res) {
    Feed.find({}, (err,feed) => {
        if (err)
            res.send(err);
        res.json(feed);
    });
};




exports.create_a_feed = function(req, res) {
    var new_feed = new Feed(req.body);
    new_feed.save((err, task) =>{
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.read_a_feed = function(req, res) {
    Feed.findById(req.params.feedId, (err, task) => {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.update_a_feed = function(req, res) {
    Feed.findOneAndUpdate({_id: req.params.feedId}, req.body, {new: true}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.delete_a_feed = function(req, res) {

    Feed.remove({
        _id: req.params.feedId
    }, function(err, feed) {
        if (err)
            res.send(err);
        res.json({ message: 'Feed successfully deleted' });
    });
};