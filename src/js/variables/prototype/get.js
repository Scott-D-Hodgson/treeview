Variables.prototype.Get = function(name) {
    if (!Variables.prototype.collection.hasOwnProperty(name)) {
        return null;
    }
    return Variables.prototype.collection[name];
};