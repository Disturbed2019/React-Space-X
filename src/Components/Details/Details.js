import React, {Fragment, useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import './Details.css';
import Main from "../Main/Main";
import useLaunches from "../useLaunchers/useLaunchers";
import YouTube from 'react-youtube';



const Details = (props) => {
    const [launch, setLaunch] = useState(null);
    const { getLaunch } = useLaunches();
    useEffect(() => {
        setLaunch(getLaunch(props.match.params.id))
    });

    const history = useHistory();
    const opts = {
        width:'560',
        height:'315',
        frameBorder:'0',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },

    };

    if (!launch) return null
    /*<div>Loading прелоадер</div>*/

    return (
        <Fragment>
            <Main name={launch.name}/>
            <main className="details">
                <div className="container">
                    <div className="details-row">
                        <div className="details-image">
                            <img src={launch.links.patch.small} alt={launch.name}/>
                        </div>
                        <div className="details-content">
                            <p className="details-description">{launch.details}</p>
                        </div>
                    </div>
                    <YouTube className="details-youtube" opts={opts} videoId={launch.links.youtube_id}/>
                </div>
                <button onClick={history.goBack} className="button button-back">go back</button>
            </main>
        </Fragment>
    )
};
export default Details;

