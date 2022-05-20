import React from 'react';
import News from "../MainPage/MainPage";
import classes from "./blogPage.module.css"

class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({menuStatus: false})
        this.handleMenu = this.handleMenu.bind(this)
    }

    handleMenu() {
        this.setState({menuStatus: !this.state.menuStatus})
    }

    render() {
        return (
            <>
                <h1 className={classes.h1}>Blog Page</h1>
                {this.state.menuStatus && <News/>}
                <button className={classes.btn} onClick={this.handleMenu}>show</button>
            </>
        )
    }
}
export default BlogPage;