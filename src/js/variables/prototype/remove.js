Variables.prototype.remove = function(name) {
    delete Variables.prototype.collection[name];
    return this;
};