import React, { useState } from 'react';
import loadable from '@loadable/component';
import styles from './style.module.scss';

const Comments = loadable(() => import('components/UI/Comments'));

const data = [
	{
		title: 'Описание',
		type: 'text',
		active: true,
	},
	{
		title: 'Спецификация',
		type: 'table',
		active: false,
	},
	{
		title: 'Отызывы (2)',
		type: 'reviews',
		active: false,
	}
];

export default function TabPanel({ className, }) {
	const [headerTab, setHeaderTab] = useState(data);
	let activeTab;
	const templateHeaderTab = headerTab.map(item => {
		if (item.active) {
			activeTab = item;
		}
		return (
			<li className={ `${styles.tabPanel__item} ${item.active ? 'active ' + styles.active : ''}` } key={item.title}>
				<a className={styles.tabPanel__link} onClick={() => { changeTab(item) }} data-toggle="tab">
					<i style={{marginRight: '5px'}} className="fas fa-pencil-alt" />
					{ item.title }
				</a>
			</li>
		)
	});

	function changeTab(el) {
		setHeaderTab(headerTab.map(item => {
			item.active = item.title === el.title;
			return item;
		}))
	}

	return (
		<div className={`row ${className}`}>
			<div className="col-sm-12">
				<ul className="nav nav-tabs font-alt" role="tablist">
					{ templateHeaderTab }
				</ul>
				<div className="tab-content">
					<div className="tab-pane active">

						{
							activeTab.type === 'text' && <>
								<p>Everyone realizes why a new common language would be desirable: one could refuse to pay expensive
									translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more
									common words. If several languages coalesce, the grammar of the resulting language is more simple and
									regular than that of the individual languages.</p>
								<p>The European languages are members of the same family. Their separate existence is a myth. For
									science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their
									grammar, their pronunciation and their most common words.</p>
							</>
						}
						{
							activeTab.type === 'table' && <>
								<table className="table table-striped ds-table table-responsive">
									<tbody style={{ display: 'table', width: '100%' }}>
									<tr>
										<th>Title</th>
										<th>Info</th>
									</tr>
									<tr>
										<td>Compositions</td>
										<td>Jeans</td>
									</tr>
									<tr>
										<td>Size</td>
										<td>44, 46, 48</td>
									</tr>
									<tr>
										<td>Color</td>
										<td>Black</td>
									</tr>
									<tr>
										<td>Brand</td>
										<td>Somebrand</td>
									</tr>
									</tbody>
								</table>
							</>
						}
						{
							activeTab.type === 'reviews' && <>
								<div className="comments reviews">
									<div className="comment clearfix">
										<div className="comment-avatar">
											<img src="" alt="avatar"/>
										</div>
										<div className="comment-content clearfix">
											<div className="comment-author font-alt">
												<a href="#">John Doe</a>
											</div>
											<div className="comment-body">
												<p>The European languages are members of the same family. Their separate existence is a myth.
													For science, music, sport, etc, Europe uses the same vocabulary. The European languages are
													members of the same family. Their separate existence is a myth.</p>
											</div>
											<div className="comment-meta font-alt">Today, 14:55 -
												<span><i
													className="fa fa-star star"
												></i></span>
												<span><i className="fa fa-star star"></i></span>
												<span><i
													className="fa fa-star star"
												></i></span>
												<span><i className="fa fa-star star"></i></span>
												<span><i
													className="fa fa-star star-off"
												></i></span>
											</div>
										</div>
									</div>
									<div className="comment clearfix">
										<div className="comment-avatar">
											<img src="" alt="avatar"/>
										</div>
										<div className="comment-content clearfix">
											<div className="comment-author font-alt">
												<a href="#">Mark Stone</a>
											</div>
											<div className="comment-body">
												<p>Europe uses the same vocabulary. The European languages are members of the same family. Their
													separate existence is a myth.</p>
											</div>
											<div className="comment-meta font-alt">Today, 14:59 -
												<span><i
													className="fa fa-star star"
												></i></span>
												<span><i className="fa fa-star star"></i></span>
												<span><i
													className="fa fa-star star"
												></i></span>
												<span><i
													className="fa fa-star star-off"
												></i></span>
												<span><i className="fa fa-star star-off"></i></span>
											</div>
										</div>
									</div>
								</div>
								<div className="comment-form mt-30">
									<Comments/>
								</div>
							</>
						}
					</div>
				</div>
			</div>
		</div>
	)
}