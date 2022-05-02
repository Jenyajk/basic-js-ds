const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(val) {
    this.head = addInside(this.head, val);

    function addInside(node, val) {
      if (!node) {
        return new Node(val);
      }

      if (node.data === val) {
        return node;
      }

      if (val < node.data) {
        node.left = addInside(node.left, val);
      }
      else
      {
        node.right = addInside(node.right, val);
      }

      return node;
    }
  }

  has(val) {
    return searchInside(this.head, val);

    function searchInside(node, val) {
      if (!node) {
        return false;
      }

      if (node.data == val) {
        return true;
      }

      return val < node.data ? searchInside(node.left, val) : searchInside(node.right, val);
    }
  }

  find(val) {
    return findInside (this.head, val);

    function findInside (node, val) {
      if (!node) {
        return null;
      }

      if (node.data == val) {
        return node;
      }

      return val < node.data ? findInside(node.left, val) : findInside(node.right, val);
    }
  }

  remove(val) {
    
    this.head = removeNode(this.head, val);

    function removeNode(node, val) {
      if (!node) {
        return null;
      }
      
      if (val < node.data) {
        node.left = removeNode(node.left, val);
        return node;
      }
      else if (val > node.data) {
        node.right = removeNode(node.right, val);
        return node;
      }
      else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;

        node.left = removeNode(node.left, maxFromLeft.data); 

        return node;
      }
    }
  }

  min() {
    if (!this.head) {
      return;
    }

    let node = this.head;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.head) {
      return;
    }

    let node = this.head;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};