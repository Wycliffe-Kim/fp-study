const _ = require('lodash');

class Tree {
  constructor(root) {
    this._root = root;
  }

  static map(node, fn, tree) {
    node.value = fn(node.value);
    if (tree == null) {
      tree = new Tree(node);
    }

    if (node.hasChildren()) {
      _.map(node.children, (child) => Tree.map(child, fn, tree));
    }

    return tree;
  }

  get root() {
    return this._root;
  }
}

module.exports = Tree;