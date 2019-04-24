import React, { Component } from 'react';
import video from '../../../../video/hyperX.mp4';
import Button from '../../../Button';
import './style.css';

class VideoComponent extends Component {
	state = {
		videoMute: true
	}
	render() {
		let buttonMuteIcon = this.state.videoMute ? "volume-mute" : 'volume-up'
		return (
			<div className="video-wrapper">
				<video autoPlay muted={this.state.videoMute} loop className="video">
					<source src={video} type="video/mp4"/>
					Your browser does not support HTML5 video.
				</video>
				<Button onClick={() => this.setState({videoMute: !this.state.videoMute})} className="btn-mute" icon={buttonMuteIcon}/>
			</div>
		)
	}
}

export default VideoComponent