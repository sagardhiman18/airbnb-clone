import React, { useState } from 'react';
import './banner.css';
import { Button } from "@material-ui/core";
import Search from '../search';
import { useHistory } from "react-router-dom";

const Banner = () => {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
            <div className="banner_search">
                { showSearch && <Search/> }
                <Button onClick={() => setShowSearch(!showSearch)} 
                    className="banner_searchButton"
                    variant='outlined'>
                        {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className="banner_info">
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of gateway
                    to uncover the hidden gems near
                    you
                </h5>
                <Button variant='outlined' onClick={() => history.push('/search')}> Explore Nearby </Button>
            </div>
        </div>
    );
}

export default Banner;