import React from 'react';
import './Projects.styles.sass';
import PreviewProject from './PreviewProject';
import PORTFOLIO_DATA from './portfolio-data'

class Projects extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          collections: PORTFOLIO_DATA,
        };
      }

    render(){

        const { collections } = this.state

        return (
            <section className="projects d-flex flex-wrap">
                {collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewProject key={id} {...otherCollectionProps} />
                ))}
            </section>
        )
    }
}

export default Projects
