const mongoose = require('mongoose');
const config = require("../config/config");
mongoose.connect(config.dbUrl, {
    useUnifiedTopology: true,
})
    .then(() => console.log('DB Connected!'))
    .catch((error) => console.log("Error in DB connect", error));

module.exports = mongoose