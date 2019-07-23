import categoryReducer from './../../src/reducers/category-reducer';

describe("categoryReducer", () => {

    test('Should return default state if no action type is recognized', () => {
        expect(categoryReducer({}, { type: null})).toEqual({});
    })
})