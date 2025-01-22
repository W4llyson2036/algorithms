// Adicione um método chamado size() que retorna o número de elementos na lista.
// Desafio:
// Depois de criar a lista no exercício 1, chame size() para verificar o tamanho da lista.
// Resultado esperado: 4

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                // console.log(current.next)
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    preappend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    remove(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            //   a           a    b          
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }
    
        if (current.next) {
            current.next = current.next.next;  
            this.size--; 
        }
    }

    print() {
        let current = this.head;
        let arr = [];

        while (current.next) {
            arr.push(current.value);
            current = current.next;
        } 

        console.log(arr.join(" -> "));
    }

    sizeA() {
        console.log(`${this.size}`);
    }
}

let arr = new LinkedList();

arr.append(4);
arr.append(31);
arr.append(78);
arr.append(45);
arr.preappend(0);
arr.append(78);
arr.append(21);
arr.remove(44);
arr.remove(78);
arr.preappend(45);
arr.sizeA();
arr.print();