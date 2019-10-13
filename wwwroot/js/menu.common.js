var menuZuppe = {
    categoryName: "Zuppe",
    menuItems: [{ name: "PASTA E FAGIOLE ", cost: "$6.00" },
    { name: "NONNA'S SOUP OF THE DAY", cost: "$6.00" }]
};

var menuBevande = {
    categoryName: "Bevande",
    menuItems: [{ name:"Soft Drinks    ", cost:"$2.50" },
    { name:"Iced Tea    ", cost:"$2.50" },
    { name:"Sparkling Water", cost:"$6.00" },
    { name:"Beer on Draft", cost:"$5.00" },
    { name:"Imported Draft", cost:"$6.00" },
    { name:"Bottled Beer Domestic", cost:"$5.00" },
    { name:"Bottled Beer Import", cost:"$6.00" },
    { name:"Wine Cork Fee", cost:"$15.00" },
    ]
};

var menuCaffe = {
    categoryName: "AntiPasti",
    menuItems: [
        { name: "ESPRESSO    ", cost: "$3.00" },
        { name: "DOUBLE ESPRESSO    ", cost: "$5.50" },
        { name: "CAPPUCCINO    ", cost: "$4.50" },
        { name: "CAFFE AMERICANO   ", cost: "$2.50" },
        { name: "MARECHITO   ", cost: "$3.00" },
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
        name: "HOMEMADE TIRAMISU",
        description: "",
        cost: "$8",
        imageURL: "",
        column: 1

    },
    {
        name: "HOMEMADE RICOTTA CHEESECAKE",
        description: "",
        cost: "$8",
        imageURL: "",
        column: 1

    },
    {
        name: "HOMEMADE CHOCOLATE CHEESECAKE",
        description: "",
        cost: "$8",
        imageURL: "",
        column: 1

    },
    {
        name: "CHEESECAKE OF THE DAY",
        description: "Ask your server for details.",
        cost: "$8",
        imageURL: "",
        column: 1

    },
    {
        name: "CANNOLI",
        description: "",
        cost: "$7",
        imageURL: "",
        column: 1

    },
    {
        name: "FLOURLESS CHOCOLATE CAKE",
        description: "",
        cost: "$7",
        imageURL: "",
        column: 1

    },
    {
        name: "ITALIAN TARTUFO",
        description: "Vanilla and Chocolate Ice Cream with Cherry and Almond Center",
        cost: "$7",
        imageURL: "",
        column: 1

    },
    {
        name: "SPUMONI TARTUFO",
        description: "Chocolate, Strawberry and Pistachio Ice Cream",
        cost: "$7",
        imageURL: "",
        column: 1

    },
    {
        name: "ICE CREAM OF THE DAY",
        description: "Ask your server for details.",
        cost: "$7",
        imageURL: "",
        column: 1

    },
    {
        name: "LEMON SORBET",
        description: "",
        cost: "$7",
        imageURL: "",
        column: 1

    },
    {
        name: "ORANGE SORBET",
        description: "",
        cost: "$7",
        imageURL: "",
        column: 1

    },
]
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
