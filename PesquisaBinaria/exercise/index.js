// Elements html
let input_search_product = document.querySelector('.js-search-product');
let input_name_new_product = document.querySelector('.js-add-new-product');
let button_submit_product = document.querySelector('.js-btn-add-product');
let container_products = document.querySelector('.container-products');
let button_delete_product = document.querySelector('.js-delete-product');
let icon_of_input_search = document.querySelector('.js-img-icon-search');

// State
let switch_icon = false;
let array_sorted_Products = null; 

// Data
let all_product_on_the_list = [];

function search_product() {
    let name_length = input_search_product.value.length;
    let target = input_search_product.value;

    if (name_length > 0 && switch_icon === false) {
        array_sorted_Products = sorted_Products();
        switch_icon_of_input_search(true);
    } 

    if (name_length == 0 && switch_icon === true) {
        switch_icon_of_input_search(false);
        render_products_all_products(all_product_on_the_list);
    } 

    let left = 0;
    let right = array_sorted_Products.length - 1;
    let result_query = [];
    let query_chunk_string;

    // A complexidade do algoritmo é O(log n + k) porque:
    // O(log n) representa o tempo necessário para encontrar uma ocorrência do target usando pesquisa binária.
    // O(k) representa o tempo necessário para verificar todas as ocorrências adjacentes do target na lista.
    
    while (left <= right) {
        let midle = Math.floor((left + right) / 2);
        query_chunk_string = array_sorted_Products[midle].name.slice(0, target.length);
        
        if (query_chunk_string === target) {
            result_query.push(array_sorted_Products[midle]);

            // Busca adicional para a esquerda de 'midle'. Big O = O(k)
            let l = midle - 1; 
            while (l >= left && array_sorted_Products[l].name.slice(0, target.length) === target) {
                result_query.push(array_sorted_Products[l]);
                l--;
            }

            // Busca adicional para a direita de 'midle'. Big O = O(k)
            let r = midle + 1;
            while (r <= right && array_sorted_Products[r].name.slice(0, target.length) === target) {
                result_query.push(array_sorted_Products[r]);
                r++;
            }

            break;
        } else if (array_sorted_Products[midle].name > target) { 
            right = midle - 1; 
        } else {
            left = midle + 1;
        }
    }

    if (result_query.length > 0) {
        delete_all_products();
        render_products_filtered(result_query);
    } 
}

input_search_product.addEventListener("input", search_product);

function generates_id() {
    let new_id = '';
    let letter = [];

    for (let add_one=0; add_one<26; add_one++) {
        letter.push(String.fromCharCode(97+add_one));
    }

    for (let i=0; i<=5; i++) {
        let random_number = Math.round(Math.random() * 62);
        random_number < 26 ? new_id += letter[random_number] : new_id += random_number;
    }

    return new_id;
}

function create_div_product(id_product, name_product) {
    // create element 
    const P = document.createElement('p');
    const Div = document.createElement('div');
    const Button = document.createElement('button');

    // add attribute
    Div.dataset.data_id_product = id_product;
    Div.setAttribute('class', 'product-name');
    Button.setAttribute('class', 'js-delete-product');

    // Function
    Button.addEventListener('click', delete_product);

    // add content
    P.innerText = name_product;
    Button.innerText = 'Delete'

    // mount html
    Div.appendChild(P);
    Div.appendChild(Button);
    document.querySelector('.container-products').append(Div);
}

function switch_icon_of_input_search(update_value) {
    switch_icon = update_value;
    icon_of_input_search.setAttribute('src', 
        `${update_value ? 'img/icon-delete.png': 'img/icon-search.png'}`
    );
}

function delete_all_products() {
    container_products.innerHTML = '';
}

function render_products_filtered(result_query) {
    result_query.forEach(product => {
        create_div_product(product.id, product.name);
    })
}

function render_products_all_products(arrayProducts) {
    arrayProducts.forEach(arrayProducts => {
        create_div_product(arrayProducts.id, arrayProducts.name);
    })
}

function sorted_Products() {
    let sortedProducts = all_product_on_the_list.sort((a, b) => a.name.localeCompare(b.name));
    return sortedProducts;
}

// Event
button_submit_product.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (!input_name_new_product.value) return;
    
    let id_product = generates_id();

    all_product_on_the_list.unshift({
        id: id_product,
        name: input_name_new_product.value
    });

    create_div_product(id_product, input_name_new_product.value);

    input_name_new_product.value = '';
})

function delete_product(e) {
    let pai = e.target.parentElement;
    let id_product = pai.dataset.data_id_product;
    let match_id = all_product_on_the_list.findIndex(product => product.id === id_product);
   
    all_product_on_the_list.splice(match_id, 1);
    pai.remove();
}

icon_of_input_search.addEventListener('click', (Event) => {
    if (Event.target.getAttribute('src') === 'img/icon-delete.png') {
        input_search_product.value = '';
        delete_all_products();

        all_product_on_the_list.forEach(product => {
            create_div_product(product.id, product.name);
        })
    }
})