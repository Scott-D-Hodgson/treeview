Variables.prototype.Add = function(name, value) {
    Variables.prototype.collection[name] = value;
    return this;
};