Variables.prototype.add = function(name, value) {
    Variables.prototype.collection[name] = value;
    return this;
};