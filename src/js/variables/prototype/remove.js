Variables.prototype.Remove = function(name) {
    delete Variables.prototype.collection[name];
    return this;
};