import {ADD_ONE, REMOVE_ONE} from "../types";
import fetchDataReducer from './fetchData';

describe('fetch Data Reducer', () => {

    it('Should return default state', () => {
        const newState = fetchDataReducer(undefined, {});
        expect(newState).toEqual({number: 0});
    });

    it('Should add one', () => {

        const newState = fetchDataReducer(undefined, {
            type: ADD_ONE
        });
        expect(newState).toEqual({number: 1});

    });

    it('Should subtract one', () => {

        const newState = fetchDataReducer(undefined, {
            type: REMOVE_ONE
        });
        expect(newState).toEqual({number: -1});

    });

});