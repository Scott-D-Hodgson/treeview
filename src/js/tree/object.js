let Tree = function (selector) {
    let elm = document.querySelector(selector);
    if (!elm) {
        throw "Unable to locate target of tree";
    }
    if (elm.nodeName !== "UL") {
        throw "Unable to target element other than UL";
    }
    if (!elm.getAttribute("id")) {
        // todo: Generate unique id
        throw "Target missing id";
    }
    let vars = sdh.Variables();
    // initialize tree variables
    if (!vars.has("trees")) {
        vars.add("trees", [elm.id]);
    } else {
        let existing = vars.get("trees");        
        if (!existing.includes(elm.id)) {
            existing.push(elm.id);
            vars.add("trees", existing);
        }
    }
    // initialize children nodes
    let nodes = null;
    if (!vars.has(elm.id)) {
        vars.add(elm.id, (nodes = []));
    } else {
        nodes = vars.get(elm.id);
    }
    let tree = new Tree.init();
    tree.id = elm.id;
    tree.nodes = nodes;
    return tree;
};
Tree.prototype = {};
Tree.init = function () {
    let self = this;
};
Tree.init.prototype = Tree.prototype;