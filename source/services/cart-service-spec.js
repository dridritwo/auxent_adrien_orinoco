import { stringWithoutSpace, getCartSize } from "../../src/js/services/CartService.js";


describe('stringWithoutSpace', () => {
    it('should return "darkbrown" if "dark brown" is entered', () => {
        expect(stringWithoutSpace("dark brown")).toBe("darkbrown");
    });
    it('should return a number as string if a number is entered', () => {
        expect(stringWithoutSpace(9)).toBe("9");
    });
    it('should return "darkbrown10" if "dark brown10" is entered', () => {
        expect(stringWithoutSpace("dark brown")).toBe("darkbrown");
    });

});

describe('getCartSize', () => {
    // grabs #cart-counter from the DOM
    // gets cart from local storage
    // if there is a cart, updates the number
        //
    it('should return a number', () => {
        // arrange
        let cart = `{
            "5beaa8bf1c9d440000a57d94-Darkbrown": {
                "colors": [
                    "Tan",
                    "Chocolate",
                    "Black",
                    "White"
                ],
                "_id": "5be9c8541c9d440000665243",
                "name": "Norbert",
                "price": 2900,
                "imageUrl": "http://localhost:3000/images/teddy_1.jpg",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "quantity": 3
            },
            "5beaa8bf1c9d440000a57d94-Palebrown": {
                "colors": [
                    "Pale brown",
                    "Dark brown",
                    "White"
                ],
                "_id": "5beaa8bf1c9d440000a57d94",
                "name": "Arnold",
                "price": 3900,
                "imageUrl": "http://localhost:3000/images/teddy_2.jpg",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "quantity": 3
            },
            "5be9c8541c9d440000665243-Tan": {
                "colors": [
                    "Brown"
                ],
                "_id": "5beaaa8f1c9d440000a57d95",
                "name": "Lenny and Carl",
                "price": 5900,
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "imageUrl": "http://localhost:3000/images/teddy_3.jpg",
                "quantity": 4
            }
        }`
        let parsedCart = JSON.parse(cart)
        // act 
        // assert
        expect(getCartSize(parsedCart)).toBe(10);
    })

    it('should return 0 if cart null', () => {
        // arrange
        let cart = null;
        // act 
        // assert
        expect(getCartSize(cart)).toBe(0);
    })
    
    it('should return 0 if cart ""', () => {
        // arrange
        let cart = "";
        // act 
        // assert
        expect(getCartSize(cart)).toBe(0);
    })

})
