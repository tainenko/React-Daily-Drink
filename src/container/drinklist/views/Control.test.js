import React from "react";
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Control from "./Control";

afterEach(cleanup);

const setup = () => {
    const utils = render(<Control isDelClickable={false} />);
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
    expect(asFragment()).toMatchSnapshot()
});

it('addBtn should have text "+ Add"',()=>{
    const {addBtn}=setup();
    expect(addBtn).toHaveTextContent("+ Add")
});

it('addBtn should have be enable',()=>{
    const {addBtn}=setup();
    expect(addBtn).toBeEnabled();
});

it('delBtn should have text "- Del"',()=>{
    const {delBtn}=setup();
    expect(delBtn).toHaveTextContent("- Del")
});

it('delBtn should be disable',()=>{
    const {delBtn}=setup();
    expect(delBtn).toBeDisabled()
});

it('delBtn should be enable when isDelClickable is true',()=>{
    const delBtn =render(<Control isDelClickable={true} />).getByTestId("del button");
    expect(delBtn).toBeEnabled();
});
