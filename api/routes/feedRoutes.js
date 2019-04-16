'use strict';

module.exports = function(app) {
    var feedList = require('../controllers/feedsController');

    // todoList Routes
    app.route('/feeds')
        .get(feedList.list_all_feeds)
        .post(feedList.create_a_feed);


    app.route('/feeds/:feedId')
        .get(feedList.read_a_feed)
        .put(feedList.update_a_feed)
        .delete(feedList.delete_a_feed);
};
