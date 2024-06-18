// Elements html
let input_search_product = document.querySelector('.js-search-product');
let input_name_new_product = document.querySelector('.js-add-new-product');
let button_submit_product = document.querySelector('.js-btn-add-product');
let container_products = document.querySelector('.container-products');
let button_delete_product = document.querySelector('.js-delete-product');
let icon_of_input_search = document.querySelector('.js-img-icon-search');

// State
let switch_icon = false;

// Data
let all_product_on_the_list = [];

function search_product() {
    let name_length = input_search_product.value.length;
    let query_name = input_search_product.value;

    if (name_length > 0 && switch_icon === false) {
        switch_icon_of_input_search(true);
    } 

    if (name_length == 0 && switch_icon === true) {
        switch_icon_of_input_search(false);
    } 
    
    let query_result = all_product_on_the_list.filter(product => { // O(n)
        let target = product.name.slice(0, name_length);

        if (target == query_name) {
            return product;
        }
    })
    
    delete_all_products();
    render_products_filtered(query_result);
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
    const Div = document.createElement('div');
    const P = document.createElement('p');
    const Button = document.createElement('button');

    // add attribute
    Div.setAttribute('class', 'product-name');
    Div.dataset.data_id_product = id_product;
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
    let match_id =  all_product_on_the_list.findIndex(product => product.id === id_product);
   
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