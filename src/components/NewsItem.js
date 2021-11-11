import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {

        let { title, desc, imageUrl, url, author, date, source } = this.props;

        return (
            <div className="card my-3">
                <img src={imageUrl ? imageUrl : "https://c.ndtvimg.com/2021-11/6nnt30eo_eric-adams-reuters_625x300_05_November_21.jpg"} className="card-img-top" alt="..." />
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
                    {source}
                </span>
                <div className="card-body">
                    {/* <h5 className="card-title">{title ? title.slice(0, 60) : ""}..</h5> */}
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc ? desc.slice(0, 80) : ""}...</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm">Read more</a>
                </div>
            </div>
        )
    }
}
