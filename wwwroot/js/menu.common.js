var menuZuppe = {
    categoryName: "Zuppe",
    menuItems: [{ name: "PASTA E FAGIOLE ", cost: "$6" },
    { name: "NONNA'S SOUP OF THE DAY", cost: "$6" }]
};

var menuBevande = {
    categoryName: "Bevande",
    menuItems: [{ name:"Soft Drinks    ", cost:"$2.50" },
    { name:"Iced Tea    ", cost:"$2.50" },
    { name:"Sparkling Water    ", cost:"$6.00" },
    { name:"Beer on Draught    ", cost:"$5.00" },
    { name:"Imported Draught    ", cost:"$6.00" },
    { name:"Bottled Beer Domestic    ", cost:"$5.00" },
    { name:"Bottled Beer Import", cost:"$6.00" },
    { name:"Wine Cork Fee", cost:"$15.00" },
    ]
};

var menuCaffe = {
    categoryName: "AntiPasti",
    menuItems: [
        { name: "ESPRESSO    ", cost: "$2.50" },
        { name: "CAPPUCCINO    ", cost: "$3.50" },
        { name: "CAFFE AMERICANO   ", cost: "$2.00" },
        { name: "NONNA’S COLD BREW   ", cost: "$3.00" },
    ]
};

var menuMain = {
    categoryName: "AntiPasti",
    menuItems: [{
        name: "CALAMARI FRITTI",
        description: "Fried calamari, cherry peppers, spicy marinara sauce",
        cost: "$12",
        imageURL: "images/lunch-01.jpg",
        column: 1

    },
    {
        name: "CALAMARI FRITTI",
        description: "Fried calamari, cherry peppers, spicy marinara sauce",
        cost: "$12",
        imageURL: "images/lunch-01.jpg",
        column: 1

    }]
};

var menuDesserts = {
    categoryName: "AntiPasti",
    menuItems: [{
        name: "Daily homemade desserts available",
        description: "Ask your server for details.",
        cost: "$",
        imageURL: "images/lunch-01.jpg",
        column: 1

    }]
};


var source = document.getElementById("item-mainmenu").innerHTML;
var template = Handlebars.compile(source);


var html = template(menuZuppe);
$('#menu-starters').html(html);

var html = template(menuBevande);
$('#menu-bevande').html(html);

var html = template(menuCaffe);
$('#menu-caffe').html(html);

var html = template(menuMain);
$('#menu-main').html(html);

var html = template(menuDesserts);
$('#menu-desserts').html(html);
