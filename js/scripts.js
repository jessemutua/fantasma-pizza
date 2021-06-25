$(document).ready(function() {
    $("#checkout").click(function() {
        let flavour = $(".flavour option:selected").val();
        let size = $(".size option:selected").val();
        let number = $("#number").val();
        let topping = $(".topping option:selected").val();
        let crust = $(".crust option:select").val();
        console.log(size, flavour, number, topping, crust);

        let order = (f, s, n, t, c, sum) => {
            return { f, s, n, t, c, sum };
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
                        } else if (crust === "flay-bed") {
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

        }

    })
})