import React from 'react';
import ReactStars from 'react-stars/dist/react-stars';

export default function Comments({ title = 'Добавить отзыв' }) {
	return (
		<>
			<h4 className="comment-form-title font-alt">{ title }</h4>
			<form method="post">
				<div className="row">
					<div className="col-sm-4">
						<div className="form-group">
							<label className="sr-only" htmlFor="name">Name</label>
							<input className="form-control" id="name" type="text" name="name" placeholder="Name"/>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="form-group">
							<label className="sr-only" htmlFor="email">Name</label>
							<input className="form-control" id="email" type="text" name="email" placeholder="E-mail"/>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="form-group">
							<select defaultValue={'stub'} className="form-control">
								<option defaultValue={'stub'} disabled={true}>Rating</option>
								<option defaultValue="1">1</option>
								<option defaultValue="2">2</option>
								<option defaultValue="3">3</option>
								<option defaultValue="4">4</option>
								<option defaultValue="5">5</option>
							</select>
						</div>
					</div>
					<div className="col-sm-12">
						<div className="form-group">
							<textarea className="form-control" id="" name="" rows="4" placeholder="Review"></textarea>
						</div>
					</div>
					<div className="col-sm-12">
						<button className="btn btn-round btn-d" type="submit">Submit Review</button>
					</div>
				</div>
			</form>
		</>
	)
}