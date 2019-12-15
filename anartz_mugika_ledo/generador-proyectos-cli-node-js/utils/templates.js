const ejs = require('ejs');

module.exports = {
    render: function (content, data) {
        return ejs.render(content, data);
    }
}