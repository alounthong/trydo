import React, { Component } from "react";
import { Link } from "react-router-dom";

const PortfolioListContent = [
    {
        image: 'image-1',
        title: 'PAS Event'
    },
    {
        image: 'image-2',
        title: 'Design Studio'
    },
    {
        image: 'image-3',
        title: 'IF.'
    },
    {
        image: 'image-4',
        title: 'Digiplug'
    },
    {
        image: 'image-5',
        title: 'INFO.'
    },
    {
        image: 'image-6',
        title: 'Eight Media'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><Link to="/portfolio">{value.title}</Link></h4>
                                    <div className="portfolio-button">
                                        <Link className="rn-btn" to="/portfolio">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;