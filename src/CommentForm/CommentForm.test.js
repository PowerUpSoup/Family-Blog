import React from 'react';
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json'
import CommentForm from './CommentForm'

describe(`Note component`, () => {

    it('renders a Comment', () => {
        const wrapper = shallow(
            <BrowserRouter>
                <CommentForm />
            </BrowserRouter>
        )
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})