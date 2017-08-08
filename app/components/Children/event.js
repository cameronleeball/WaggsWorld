import React from 'react';
import { render } from 'react-dom';

class Event extends React.Component{


	render(){
		return(
			<div className="col-sm-6 col-md-6">
            	<div className="single_news">
                	<div className="img_news">
                		<img src={"http://placehold.it/1280x675"} alt="Blog Image" />
                	</div>
                    <div className="news">
                       	<div className="topic">
                           	<div className="title_topic">
                                <h4><a href="#">Google could learn from rival Microsoft in EU's antitrust decision</a></h4>
                                <p className="date pull-left"><i className="fa fa-calendar color"></i> 26 feb 2017</p>
                                <p className="author_name pull-left"><i className="fa fa-user color"></i> By Admin</p>
                            </div>
                            <div className="clearfix"></div>
                            <p className="mrg_top20 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...</p>
                        </div>

                        <div className="topic_info mrg_top40 text-center">
                            <div className="col-xs-4 col-sm-4 col-md-4">
                               	<p className="like"><i className="fa fa-heart"></i> 30</p>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4">
                                <p className="comment"><i className="fa fa-comment"></i> 60</p>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4">
                                <p className="viwes"><i className="fa fa-eye"></i> 190</p>
                            </div>
                        </div>
                            <div className="clearfix"></div>
                    </div>
                </div>
            </div>
			)
	}
}


});



module.exports = Event;