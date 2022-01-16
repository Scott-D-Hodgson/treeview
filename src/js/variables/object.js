let Variables = function () {
    let variables = new Variables.init();
    return variables;
};
Variables.prototype = {
    collection: {}
};
Variables.init = function () {
    let self = this;
};
Variables.init.prototype = Variables.prototype;