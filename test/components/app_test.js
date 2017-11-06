import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
	let component;

	beforeEach(() => {
        component = renderComponent(App);
    });

	it('should show a CommentBox component', () => {
		expect(component.find('.comment-box')).to.exist;		
	});

	it('should show a CommentList component', () => {
		expect(component.find('.comment-list')).to.exist;		
	})
});
