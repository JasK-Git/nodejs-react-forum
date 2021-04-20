import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './Post.module.css';
import Reactions from '../Reactions/Reactions.js';

const Post = (props) => {
	const [upvotes, setUpvotes] = useState(props.upvotes);
	const [status, setStatus] = useState(props.status);

	const dropDownText = React.useRef();
	function swapDropdown () {
		if (dropDownText.current.style.height === '0px' || dropDownText.current.style.height === '') {
			dropDownText.current.classList.add(styles.dropdown_hover);
			dropDownText.current.style.height = `${dropDownText.current.scrollHeight}px`;
		} else {
			dropDownText.current.classList.remove(styles.dropdown_hover);
			dropDownText.current.style.height = '0';
		}
	}
	return (
		<>
			<div className='list-group-item p-0 ml-5' style={{ 'width': '90%' }}>
				<div className='p-3 d-flex flex-row'>
					<p className={styles.post_title}>{props.title}</p>
					<div className='ml-auto d-flex flex-row'>
						<p className={`${styles.post_upvotes} ml-3 pl-3 pr-3`}>{upvotes}</p>
						<Reactions postID={props.id} setUpvotes={setUpvotes} upvotes={upvotes} status={status} setStatus={setStatus} className=''/>
						<button type='button' className='btn btn-outline-secondary ml-3 pl-3 pr-3' style={{ 'height': '40px' }} onClick={swapDropdown}>Preview</button>
					</div>
				</div>
				<div ref={dropDownText} className={styles.dropdown}>
					<p>{props.body}</p>
				</div>
			</div>
		</>
	);
};

export default Post;
