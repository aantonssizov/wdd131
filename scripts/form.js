const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

let productNameSelectElm = document.querySelector("#product-name");

products.forEach(product => {
    let productName = product.name.split(' ').map(itm => {
        itm = itm[0].toUpperCase() + itm.substring(1);
        return itm;
    }).join(' ');

    let optionElm = document.createElement('option');
    optionElm.value = product.id;
    optionElm.textContent = `${productName} - ${product.averagerating}`;

    productNameSelectElm.append(optionElm);
});