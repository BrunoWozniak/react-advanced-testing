import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
    const commentLis = props.comments.map((comment, index) => <li key={index}>{comment}</li>);
    return(
        <ul className="comment-list">
            {commentLis}
        </ul>
    );
}

const mapStateToProps = (state) => ({
    comments: state.comments
})

export default connect(mapStateToProps)(CommentList);