import React, { Component } from 'react';
import { Viewer, Entity, CameraFlyTo, Globe } from "resium";
import { Resource, Cartesian3 } from "cesium";

class Globe3D extends Component {

  constructor(props) {
    super(props);
    this.state = {
      position: null,
      flyTo: Cartesian3.fromDegrees(0.0, 0.0, 800000.0),
      followIss: false
    }
  }

  componentDidMount() {
    setInterval(() => {
      Resource.fetchJson('https://api.open-notify.org/iss-now.json').then((data) => {
        var lng = parseFloat(data.iss_position.longitude);
        var lat = parseFloat(data.iss_position.latitude);

        this.setState({
          position: Cartesian3.fromDegrees(lng, lat, 408000.0),
          flyTo: Cartesian3.fromDegrees(lng, lat, 10000000.0),
        });
      });
    }, 3000);
  }

  toggleIss = () => {
    this.setState({ followIss: !this.state.followIss });
  }

  render() {
    return (
      <div className='globe'>
        <Viewer timeline={false} homeButton={false} navigationHelpButton={false} animation={false} style={{ height: 'calc(100vh - 175px)' }}>
          <div style={{ position: 'absolute', top: 150, left: 10 }}>
            <button className='follow' onClick={() => { this.props.history.push('/WhereISS') }}>&lt; Go back</button>
            <button className='back' onClick={this.toggleIss}>{this.state.followIss ? 'Unfollow ISS' : 'Follow ISS'}</button>
          </div>
          <Globe enableLighting />
          {this.state.position !== null ? <Entity position={this.state.position} billboard={{ image: 'iss.png' }} /> : null}
          {this.state.position !== null && this.state.followIss ? <CameraFlyTo destination={this.state.flyTo} /> : null}
          {this.state.position !== null && !this.state.followIss ? <CameraFlyTo destination={this.state.flyTo} once={true} /> : null}
        </Viewer>
      </div>

    );
  }
}

export default Globe3D;