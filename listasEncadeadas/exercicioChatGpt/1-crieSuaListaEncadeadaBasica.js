// Implemente os métodos essenciais da sua própria lista encadeada:

// Adicionar ao final (append).
// Adicionar ao início (prepend).
// Exibir todos os valores da lista (print).

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = value;
        this.size = 0;
    }

    // Adicionar ao final (append).
    append(value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }
            
            current.next = newNode;
        }
        this.size++;
    }

    // Adicionar ao início (prepend).
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Exibir todos os valores da lista (print).
    print() {
        let arr = [];
        let current = this.head;

        while (current) {
            arr.push(current.value);
            current = current.next;
        }

        console.log(arr.join(" -> "));
    }
} 

let myOwnList = new LinkedList();

myOwnList.append(10);
myOwnList.append(20);
myOwnList.append(30);
myOwnList.prepend(5);
myOwnList.print();
myOwnList.prepend(2);
myOwnList.append(50);
myOwnList.prepend(1);
myOwnList.print();