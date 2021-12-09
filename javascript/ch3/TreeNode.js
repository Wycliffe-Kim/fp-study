class TreeNode {
  constructor(val) {
    this._val = val;
    this._parent = null;
    this._children = [];
  }

  isRoot() {
    return this._parent == null;
  }

  get children() {
    return this._children;
  }

  hasChildren() {
    return this._children.length > 0;
  }

  get value() {
    return this._val;
  }

  set value(val) {
    this._val = val;
  }

  append(child) {
    child._parent = this;
    this._children.push(child);
    return this;
  }

  toString() {
    return `Node (val: ${this._val}, children: ${this._children.length})`;
  }
}

module.exports = {
  TreeNode
};