import React from "react";
import Form from "./Form";
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe("Test <Form/>", () => {
    test("test render", () => {
        const form = shallow(<Form/>);
        expect(form.state("value")).toBe("");
    })

})