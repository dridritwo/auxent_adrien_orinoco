import { stringWithoutSpace, getCartSize, calculateTotalCartPrice } from "../../src/js/services/CartService.js";
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


describe('calculate Total Cart Price', () => {
    it('should be zero if cart is null', () => {
        // arrange
        let cart = nullCart;
        let parsedCart = JSON.parse(cart);
        // act 
        // assert
        expect(calculateTotalCartPrice(parsedCart)).toBe(0.00);
    })
    it('should be return a number', () => {
        // arrange
        let cart = nullCart;
        let parsedCart = JSON.parse(cart);
        // act 
        // assert
        expect(typeof calculateTotalCartPrice(parsedCart)).toBe("number");
    })
    it('qty10cart should return', () => {
        // arrange
        let cart = cartWith10Quantity;
        let parsedCart = JSON.parse(cart);
        // act 
        // assert
        expect(calculateTotalCartPrice(parsedCart)).toBe(440.00);
    })

})
