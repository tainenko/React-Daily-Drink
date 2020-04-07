import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {render, cleanup, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import reducers from '../../store/reducers'
import DrinkListPage from "./drinklist";

const initState = {
    orders: {
        total: 1,
        group: {
            0: {
                name: "MilkTea",
                price: "55",
                notes: "無糖 去冰 鮮奶"
            },
            1:{
                name: "GreenTea",
                price: "30",
                notes: "無糖 去冰 加珍珠"
            }
        }
    }
};

const renderWithRedux = (
    component,
    {store = createStore(reducers,initState)} = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    }
};

afterEach(cleanup);

it('checks initial state is equal to 0', () => {
    const {getAllByTestId} = renderWithRedux(<DrinkListPage/>);
    expect(getAllByTestId("item-name")[0]).toHaveTextContent('MilkTea')
    expect(getAllByTestId("item-price")[0]).toHaveTextContent('55')
    expect(getAllByTestId("item-notes")[0]).toHaveTextContent("無糖 去冰 鮮奶")
})