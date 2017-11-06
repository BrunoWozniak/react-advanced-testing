import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox' , () => {
    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('should have the correct class', () => {
        expect(component).to.have.class('comment-box');
    });   

    it('should have a text area', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('should have a button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('enters some text', () => {
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment');
        });

        it('should show the text in the text area', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('should clear the input when submitted', () => {
            component.simulate('submit');            
            expect(component.find('textarea')).to.have.value('');
        });
    });
});
