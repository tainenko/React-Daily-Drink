import React from "react";
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Control from "./Control";

afterEach(cleanup);

const setup = () => {
    const utils = render(<Control/>);
    const addBtn = utils.getByTestId("add button");
    const delBtn = utils.getByTestId("del button");

    return {
        addBtn,
        delBtn,
        ...utils
    }
};

it('should take a snapshot', () => {
    const {asFragment} = setup();
    expect(asFragment(<Control/>)).toMatchSnapshot()
});

it('addBtn should have text "+ Add"',()=>{
    const {addBtn}=setup();
    expect(addBtn).toHaveTextContent("+ Add")
});
