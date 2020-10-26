import mongoose from "mongoose";
import config from "../config";

mongoose.connect(config.dbConnectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../models/user'),
};
