import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('actions', () => {
    describe('saveComments', () => {
        it('should have the correct type', () => {
            const action = saveComment();
            expect(action.type).to.equal(SAVE_COMMENT);

        });            
        it('should have the correct payload', () => {
            expect(saveComment('new comment').payload).to.equal('new comment');
        });            
    })
});