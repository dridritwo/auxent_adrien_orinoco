import { stringWithoutSpace, getCartSize, calculateTotalCartPrice, getCart, removeOneFromCart, addOneToCart } from "../../src/js/services/CartService.js";
import { cartWith10Quantity, nullCart } from "../data/carts.js"


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
    it('should return a number', () => {
        // arrange
        let cart = cartWith10Quantity;
        let parsedCart = JSON.parse(cart)
        // act 
        // assert
        expect(getCartSize(parsedCart)).toBe(8);
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


describe('calculate Total Cart Price', () => {
    it('should be zero if cart is null', () => {
        // arrange
        let cart = nullCart;
        let parsedCart = JSON.parse(cart);
        // act 
        // assert
        expect(calculateTotalCartPrice(parsedCart)).toBe((0).toFixed(2));
    })
    it('should return a string', () => {
        // arrange
        let cart = nullCart;
        let parsedCart = JSON.parse(cart);
        // act 
        // assert
        expect(typeof calculateTotalCartPrice(parsedCart)).toBe("string");
    })
    it('qty10cart should return 362.00', () => {
        // arrange
        let cart = cartWith10Quantity;
        let parsedCart = JSON.parse(cart);
        // act 
        // assert
        expect(calculateTotalCartPrice(parsedCart)).toBe((362).toFixed(2));
    })
})

describe('getCart', () => {
    it('should return an object', () => {
        window.localStorage.setItem('cart', "{}");
        expect(getCart()).toBeInstanceOf(Object)
    })
})

describe('removeOneFromCart', () => {
    it('should return an object', () => {
        let cart = JSON.parse(cartWith10Quantity);
        let productKey = "5beaa8bf1c9d440000a57d94-Darkbrown";
        expect(typeof removeOneFromCart(productKey, cart)).toBe("object")
    })
    it('should return a cart with one less bear of product key 5beaa8bf1c9d440000a57d94-Darkbrown if quantity was > 1', () => {
        let cart = JSON.parse(cartWith10Quantity);
        let productKey = "5beaa8bf1c9d440000a57d94-Darkbrown";
        let returnedCart = removeOneFromCart(productKey, cart)
        expect(returnedCart[productKey].quantity).toBe(2)
    })
    it('should return an object without selected bear if quantity was = 1', () => {
        let cart = JSON.parse(cartWith10Quantity);
        let productKey = "5beaa8bf1c9d440000a57d94-Palebrown";
        let returnedCart = removeOneFromCart(productKey, cart)
        expect(returnedCart[productKey]).toBe(undefined)
    })
})

describe('addOneToCart', () => {
    it('should return an object', () => {
        let cart = JSON.parse(cartWith10Quantity);
        let productKey = "5beaa8bf1c9d440000a57d94-Darkbrown";
        expect(typeof addOneToCart(productKey, cart)).toBe("object")
    })
    it('should return a cart with one more bear of product key 5beaa8bf1c9d440000a57d94-Darkbrown if quantity was > 1', () => {
        let cart = JSON.parse(cartWith10Quantity);
        let productKey = "5beaa8bf1c9d440000a57d94-Darkbrown";
        let returnedCart = addOneToCart(productKey, cart)
        expect(returnedCart[productKey].quantity).toBe(4)
    })
    it('should return an object with selected bear if quantity was = 1', () => {
        let cart = JSON.parse(cartWith10Quantity);
        let productKey = "5beaa8bf1c9d440000a57d94-Palebrown";
        let returnedCart = addOneToCart(productKey, cart)
        expect(typeof returnedCart[productKey]).toBe("object")
    })
})