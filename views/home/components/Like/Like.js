import React from 'react';
import liked from './liked.svg';

let styles = {
    like:{
        background:'url('+liked+')'
    }
}

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <span style ={this.props.liked?styles.liked:styles.like}>
				<span class="iconLike"></span><span class="likeTotal">335</span>
			</span>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
