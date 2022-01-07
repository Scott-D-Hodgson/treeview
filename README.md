# Tree View
Vanilla JS implementation of a tree view (with Font Awesome markup for branch/node icons)

## Background
Many times I have had the need for a tree view to be present in various web projects and none of the implementations encountered quite fit the use-case that I was looking for.  Unfortunately they tend to fall into one of two camps:

* So full of bells and whistles that you have to pay for the component
* So case-specific that many opinions are made for you and the feel is "you get what you get"

Ideally the hope is to have a tree view implementation that halfs the difference.  It gets the job done without excessive features, but also has a simple/clean (mostly) unopinionated usage.

## Goal
The goal of this tree view will be hit the following points.

1. Styling:
   1. Inherit the parent's font specification
   1. Utilize Font Awesome for iconography*
   1. Simple/clean aestetic
   1. Support for custom node styling
1. Behaviour:
   1. Follow natural page tab order (no adding tab-stops)
   1. Navigation via both mouse and keyboard
   1. Capability of adding/removing nodes
   1. Support for (optional) drag-n-drop of nodes
   1. Ability to expand/collapse all nodes
   1. Ability to sort nodes in ascending/descending order
   1. Caching ability to reload tree view from HTML storage
1. Technology:
   1. Utilizing pure "vanilla" JavaScript (no external dependencies)

## HTML Markup
Tree view markup in the webpage should consist of only the target `ul` element denoting the location of the tree view.

```
<ul id="mytree"></tree>
```

## JavaScript Commands
Tree view supports two main object types to construct the tree: The `tree` itself and `nodes` of the tree.

### Tree
The following are the commands supported by the tree.

| Command | Action | Usage | Notes |
|---|---|---|---|
| `(<selector>)` | Obtain reference to a tree based on the CSS selector | `let tree = sdh.tree("#mytree");` | In the event that the selector matches multiple nodes, only the first will be returned |
| `add` | Creates node object an adds it to the tree as a root node | `let node = tree.add({ text: "My node" });` | |
| `sort` | Sorts the nodes in the tree in either `asc` or `desc` direction | `tree.sort(direction);` | Default is ascending |
| `expand` | Expands all nodes in the tree | `tree.expand();` | |
| `collapse` | Collapses all nodes in the tree | `tree.collapse();` |  |
| `export` | Exports the entirety of the tree | `let export = tree.export()` | Structure: `{ html: "", data: {}}` |
| `import` | Imports the entirety of the tree | `tree.import(structure);` | Structure is the same as the export function |

### Node
The following are the commands supported by nodes of the tree.

| Command | Action | Usage | Notes |
|---|---|---|---|
| `(<selector>);` | Obtain reference to a node based on the CSS selector | `let node = sdh.node("#mynode");` | In the event that the selector matches multiple nodes, only the first will be returned |
| `add` | Creates node object an adds it to the node as a child | `let child = node.addNode({ text: "Child node" });` | If the code has no children, this will alter the node from default into expandable |
| `sort` | Sorts the child nodes of the node in either `asc` or `desc` direction | `node.sort(direction);` | Default is ascending |
| `expand` | Expands the node to reveal the children under it | `node.expand();` | If there are no children, nothing happens |
| `collapse` | Collapses the node to hide the children under it | `node.collapse();` | If there are no children, nothing happends |