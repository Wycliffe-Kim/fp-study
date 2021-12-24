import _ from 'lodash';
import TreeNode from './TreeNode';

class Tree {
  _root: TreeNode;

  constructor(root: TreeNode) {
    this._root = root;
  }

  static map(node: TreeNode, fn: any, tree?: Tree) {
    node.value = fn(node.value);
    if (tree == null) {
      tree = new Tree(node);
    }

    if (node.hasChildren()) {
      _.map(node.children, (child: TreeNode) => Tree.map(child, fn, tree));
    }

    return tree;
  }

  get root() {
    return this._root;
  }
}

export default Tree;