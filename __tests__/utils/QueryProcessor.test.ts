import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id description', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Your Andrew ID is an identification specific to your student account " +
            "at Carnegie Mellon University. It is usually represented as the first letter " +
            "of your first name followed by your last name."
          ));
    });

    test('should answer name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Aditya"
          ));
    });

    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('should get biggest number', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 9, 65, 67?")).toEqual("67");
    });

    test('should get the square and cube', () => {
        expect(QueryProcessor("Which of the following numbers is both a square and a cube: 457, 64, 1849, 742, 1236, 1000, 2749?")).toEqual("64");
    });

    test('multiply', () => {
        expect(QueryProcessor("What is 88 multiplied by 90?")).toEqual("7920");
    });

    test('subtract', () => {
        expect(QueryProcessor("What is 79 minus 49?")).toEqual("30");
    });

    test('is prime', () => {
        expect(QueryProcessor("Which of the following numbers are primes: 99, 43, 67, 85, 32?")).toEqual("43, 67");
    });
});