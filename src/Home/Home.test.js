import React from 'react';
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json'
import Home from './Home'

describe(`Note component`, () => {

    it('renders a Comment', () => {
        const wrapper = shallow(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})