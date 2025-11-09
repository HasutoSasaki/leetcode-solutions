import { BST } from "./solution";

describe('BST', () => {
    it("空の木からスタートする", () => {
        const bst = new BST()
        expect(bst.root).toBeNull()
    })

    it('一つの値を挿入できる', () => {
        const bst = new BST()
        bst.insert(5);

        expect(bst.root?.val).toBe(5);
        expect(bst.root?.left).toBeNull();
        expect(bst.root?.right).toBeNull();
    })

    it('左の子が正しく挿入される', () => {
        const bst = new BST();
        bst.insert(5);
        bst.insert(3);

        expect(bst.root?.val).toBe(5);
        expect(bst.root?.left?.val).toBe(3);
    });

    it('右の子が正しく挿入される', () => {
        const bst = new BST();
        bst.insert(5);
        bst.insert(7);

        expect(bst.root?.val).toBe(5);
        expect(bst.root?.right?.val).toBe(7);
    });

    it('深い階層まで正しく挿入される', () => {
        const bst = new BST();
        bst.insert(10);
        bst.insert(5);
        bst.insert(3);
        bst.insert(1);

        /*
            10
           /
          5
         /
        3
       /
      1
        */

        expect(bst.root?.val).toBe(10);
        expect(bst.root?.left?.val).toBe(5);
        expect(bst.root?.left?.left?.val).toBe(3);
        expect(bst.root?.left?.left?.left?.val).toBe(1);
    });
})