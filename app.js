module.exports = {
    addNumbers: function(values) {
        values.forEach(function(value) {
            if(typeof(value) !== 'number') {
                return 0;
            }
        });
        return values.reduce((total, value) => total + value, 0);
    }
}
