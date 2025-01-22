// Classe para representar um nó
class Node {
    constructor(value) {
        this.value = value; // valor do no 
        this.next = null; // referencia para o proximo nó
    }   
}

// Classe para representar a lista encadeada
class LinkedList {
    constructor() {
        this.head = null; // Cabeça da lista (primeiro nó)
        this.size = 0; // Tamanho da lista
    }

    // Método para adicionar um nó no final
    append(value) {
        const newNode = new Node(value);
        
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

    // Método para adicionar um nó no início
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Método para remover um nó com base em um valor
    remove(value) {
        if (!this.head) return;

        if (this.head.value === value) {
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

    // Método para imprimir a lista como uma string
    print() {
        const result = [];
        let current = this.head;

        while (current) {
            result.push(current.value);
            current = current.next;
        }

        console.log(result.join(" -> "));
    }
}

const list = new LinkedList();

list.append(15);
list.append(78);
list.append(91);
list.append(545);
list.print();
list.remove(78);
list.print();