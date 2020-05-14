import React from 'react';
import { withRouter } from 'react-router-dom'

const PreviewProject = ({ title, description, imageURL, route, history, match }) => {
    return (
        <article className="project col-sm-12 col-md-6 my-5" data-aos="zoom-in">
                <img src={imageURL} alt=""/>
                <h4 className="mt-4">{title}</h4>
                <p>{description}</p>
                <div>
                    <button className="btn custom-btn" onClick={() => history.push(`${match.url}${route}`)} >View Project</button>
                </div>
        </article>
    )
}

export default withRouter(PreviewProject)