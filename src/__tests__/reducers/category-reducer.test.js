import categoryReducer from './../../reducers/category-reducer';

describe("categoryReducer", () => {

    let action;
    const sampleCategoryData = {
        name: 'Job Search',
        todos: {
            0: {
                task: 'eat',
                isComplete: false
            },
            1: {
                task:  'drink',
                isComplete: false
            }
        },
        id: 0
    }

    test('Should return default state if no action type is recognized', () => {
        expect(categoryReducer({}, { type: null})).toEqual({});
    })

    test('Should add new category data to categoryList', () => {
        const { name, todos, id } = sampleCategoryData;
        action = {
            type: 'ADD_CATEGORY',
            name: name,
            todos: todos,
            id: id
        }
        expect(categoryReducer({}, action)).toEqual({
            [id] : {
                name: name,
                todos: todos,
                id: id
            }
        })
    })
})