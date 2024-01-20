const mongoose = require('mongoose');

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function () {
    console.log('I AM ABOUT TO RUN A QUERY');
    return exec.apply(this, arguments);
};
