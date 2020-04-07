import React from "react";
import {render, cleanup, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import DrinkListItem from "./Item";

afterEach(cleanup);

const setup = ({
                   toggleEditDetail = () => {
                   },
                   handleChange = () => {
                   },
                   id = 0,
                   checked = true,
                   item = {
                       name: "MilkTea",
                       price: "55",
                       notes: "微糖 去冰 加椰果"
                   }
               } = {}
) => {
    const utils = render(<DrinkListItem
            toggleEditDetail={toggleEditDetail}
            handleChange={handleChange}
            id={id}
            checked={checked}
            item={item}
        />
    );
    const checkbox = utils.getByTestId("checkbox");
    const nameItem = utils.getByTestId("item-name");
    const priceItem = utils.getByTestId("item-price");
    const notesItem = utils.getByTestId("item-notes");

    return {
        ...utils,
        checkbox,
        nameItem,
        priceItem,
        notesItem
    }
};

it("test ListItem snapshot", () => {
    const {asFragment} = setup();
    expect(asFragment()).toMatchSnapshot();
});

it("test render ListItem", () => {
    const {checkbox, nameItem, priceItem, notesItem} = setup();
    expect(checkbox).toBeChecked();
    expect(nameItem).toHaveTextContent("MilkTea");
    expect(priceItem).toHaveTextContent(55);
    expect(notesItem).toHaveTextContent("微糖 去冰 加椰果");
});

it("test toggle checkbox", () => {
    const handleChange=jest.fn();
    const {checkbox} = setup({handleChange:handleChange});
    fireEvent.click(checkbox);
    expect(handleChange).toBeCalledTimes(1);
});

it("test click NameItem",()=>{
    const toggleEditDetail=jest.fn();
    const {nameItem}=setup({toggleEditDetail:toggleEditDetail});
    fireEvent.click(nameItem);
    expect(toggleEditDetail).toBeCalledTimes(1);
});

it("test click PriceItem",()=>{
    const toggleEditDetail=jest.fn();
    const {priceItem}=setup({toggleEditDetail:toggleEditDetail});
    fireEvent.click(priceItem);
    expect(toggleEditDetail).toBeCalledTimes(1);
});
it("test click NotesItem",()=>{
    const toggleEditDetail=jest.fn();
    const {notesItem}=setup({toggleEditDetail:toggleEditDetail});
    fireEvent.click(notesItem);
    expect(toggleEditDetail).toBeCalledTimes(1);
});