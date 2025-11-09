
// ノードの定義
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

export class BST {
    root: TreeNode | null;

    constructor() {
        this.root = null
    }

    insert(val: number): void {
        this.root = this.insertNode(this.root, val)
    }

    private insertNode(node: TreeNode | null, val: number): TreeNode {
        // 空の場合
        if (node === null) {
            return new TreeNode(val)
        }

        // 再帰：左か右に進む
        if (val < node.val) {
            node.left = this.insertNode(node.left, val)
        } else {
            node.right = this.insertNode(node.right, val)
        }

        return node
    }
}