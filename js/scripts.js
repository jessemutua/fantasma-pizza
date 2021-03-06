$(document).ready(function() {
    $("#checkout").click(function() {
        let flavour = $(".flavour option:selected").val();
        let size = $(".size option:selected").val();
        let number = $("#number").val();
        let topping = $(".topping option:selected").val();
        let crust = $(".crust option:select").val();
        console.log(size, flavour, number, topping, crust);

        let order = (f, s, n, t, c, total) => {
            return { f, s, n, t, c, total };
        };
        let price, sumPrice;
        switch (flavor) {
            case flavour = "Chicken":
                switch (size) {
                    case size = "Small":
                        price = 400;
                        if (crust === "thin") {
                            sumPrice = (price * number) + 30;
                        } else if (crust === "custom") {
                            sumPrice = (price * number) + 50;
                        } else if (crust === "flat-bed") {
                            sumPrice = (price * number) + 60;
                        } else if (crust === "thick") {
                            sumPrice = (price * number) + 70;
                        }
                        break;
                    case size = "medium":
                        price = 600;
                        if (crust === "thin") {
                            sumPrice = (price * number) + 30;
                        } else if (crust === "custom") {
                            sumPrice = (price * number) + 50;
                        } else if (crust === "flat-bed") {
                            sumPrice = (price * number) + 60;
                        } else if (crust === "thick") {
                            sumPrice = (price * number) + 70;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            sumPrice(price * number) + 30;
                        } else if (crust === "custom") {
                            sumPrice = (price * number) + 50;
                        } else if (crust === "flat-bed") {
                            sumPrice = (price * number) + 60;
                        } else if (crust === "thick") {
                            sumPrice = (price * number) + 70;
                        }
                        break;
                }
                break;
            case flavour = "veg":
                switch (size) {
                    case size = "small":
                        price = 300;
                        if (crust === "thin") {
                            sumPrice = (price * number) + 30;
                        } else if (crust === "custom") {
                            sumPrice = (price * number) + 50;
                        } else if (crust === "flat-bed") {
                            sumPrice = (price * number) + 60;
                        } else if (crust === "thick") + 70;

                        break;
                    case size = "medium":
                        price = 500;
                        if (crust === "thin") {
                            sumPrice = (price * number) + 30;
                        } else if (crust === "custom") {
                            sumPrice = (price * number) + 50;
                        } else if (crust === "flat-bed") {
                            sumPrice = (price * number) + 60;
                        } else if (crust === "thick") {
                            sumPrice = (price * number) + 70;
                        }
                        break;
                    case size = "large":
                        price = 500;
                        if (crust === "thin") {
                            sumPrice = (price * number) + 30;
                        } else if (crust === "custom") {
                            sumPrice = (price * number) + 50;
                        } else if (crust === "flat-bed") {
                            sumPrice = (price * number) + 60;
                        } else if (crust === "thick") {
                            sumPrice = (price * number) + 70;
                        }
                        break;
                }
                break;
            case flavour = "Beef":
                switch (size) {
                    case size = "small":
                        price = 450
                        if (crust === "thin") {
                            sumPrice = (price * number) + 30;
                        } else if (crust === "custom") {
                            sumPrice = (price * number) + 50;
                        } else if (crust === "flat-bed") {
                            sumPrice = (price * number) + 60;
                        } else if (crust === "thick") {
                            sumPrice = (price * number) + 70;
                        }
                        break;

                    case size = "medium":
                        price = 700;
                        if (crust === "thin") {
                            sumPrice = (price * number) + 30;
                        } else if (crust === "custom") {
                            sumPrice = (price * number) + 50;
                        } else if (crust === "flay-bed") {
                            sumPrice = (price * number) + 60;
                        } else if (crust === "thick") {
                            sumPrice = (price * number) + 70;
                        }
                        break;

                    case size = "large":
                        price = 1300;
                        if (crust === "thin") {
                            sumPrice = (price * number) + 40;
                        } else if (crust === "custom") {
                            sumPrice = (price * number) + 50;
                        } else if (crust === "flat-bed") {
                            sumPrice = (price * number) + 70;
                        } else if (crust === "thick") {
                            sumPrice = (price * number) + 80;
                        }
                        break;
                }
                break;
            case flavour = "hawaiian":
                switch (size) {
                    case size = "small":
                        price = 500;

                        if (crust === "thin") {
                            sumPrice = (price * number) + 40;
                        } else if (crust === "custom") {
                            sumPrice = (price * number) + 50;
                        } else if (crust === "flat-bed") {
                            sumPrice = (price * number) + 70;
                        } else if (crust === "thick") {
                            sumPrice = (price * number) + 80;
                        }
                        break;


                    case size = "large":
                        price = 1300;
                        if (crust === "thin") {
                            sumPrice = (price * number) + 40;
                        } else if (crust === "custom") {
                            sumPrice = (price * number) + 50;
                        } else if (crust === "flat-bed") {
                            sumPrice = (price * number) + 70;
                        } else if (crust === "thick") {
                            sumPrice = (price * number) + 80;
                        }
                        break;

                    case size = "medium":
                        price = 700;
                        if (crust === "thin") {
                            sumPrice = (price * number) + 30;
                        } else if (crust === "custom") {
                            sumPrice = (price * number) + 50;
                        } else if (crust === "flay-bed") {
                            sumPrice = (price * number) + 60;
                        } else if (crust === "thick") {
                            sumPrice = (price * number) + 70;
                        }
                        break;

                }
                break;
            case flavour = "itallian":
                switch (size) {
                    case size = "small":
                        price = 600;
                        if (crust === "thin") {
                            sumPrice = (price * number) + 30;
                        } else if (crust === "custom") {
                            sumPrice = (price * number) + 50;
                        } else if (crust === "flay-bed") {
                            sumPrice = (price * number) + 60;
                        } else if (crust === "thick") {
                            sumPrice = (price * number) + 70;
                        }
                        break;

                    case size = "large":
                        price = 1300;
                        if (crust === "thin") {
                            sumPrice = (price * number) + 40;
                        } else if (crust === "custom") {
                            sumPrice = (price * number) + 50;
                        } else if (crust === "flat-bed") {
                            sumPrice = (price * number) + 70;
                        } else if (crust === "thick") {
                            sumPrice = (price * number) + 80;
                        }
                        break;

                    case size = "medium":
                        price = 700;
                        if (crust === "thin") {
                            sumPrice = (price * number) + 30;
                        } else if (crust === "custom") {
                            sumPrice = (price * number) + 50;
                        } else if (crust === "flay-bed") {
                            sumPrice = (price * number) + 60;
                        } else if (crust === "thick") {
                            sumPrice = (price * number) + 70;
                        }
                        break;

                }
                break;
        }
        switch (topping) {
            case topping = "topping1":
                sumPrice = sumPrice + 50;
                break;
            case topping = "topping2":
                sumPrice = sumPrice + 70;
                break;
            case topping = "topping3":
                sumPrice = sumPrice + 90;
                break;
            case topping = "topping4":
                sumPrice = sumPrice + 100;


        }
        let totalOrder = order(flavour, size, crust, topping, number, sumPrice)
        console.log(totalOrder);
        $('.order-prev').slideDown(2000);
        $('.consdata').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.dondeliver').show(1000);


        $('#checkout').click(function() {
            // $("#list").append("<br>" + "Flavour :   " + totalOrder.f + "<br>" + "Size :   " +
            //     totalOrder.s + "<br>" + "Crust :     " +
            //     totalOrder.c + "<br>" + "Toppings :     " +
            //     totalOrder.t + "<br>" + " Number of pizzas :    " +
            //     totalOrder.n + "<br>" + "Total Price :  " +
            //     totalOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', 
            // '24px')
            console.log('checkout')
        });

    });



    $(".deliver").click(function() {
        $('#summary').slideDown();
        $('#list').slideDown();
        $('.deliver').hide(1000);
        $('.dondeliver').hide(1000);
        $('.delinfo').show();

    });
    $('.dondeliver').click(function() {

    });
});
$(document).ready(function() {
    $('#delinfo').submit(function() {
        var name = $("input#name").val();
        var location = $("input#location").val();
        var number = $("input#phone").val();

        alert("Hello," + " " + name + " " + "your order has successfully been placed and will be delivered" +
            " " + location + " " + "shortly.Thank you for choosing Fantasma and have yourself a wonderful day.");

    });
});