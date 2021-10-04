import React, {Component} from "react";

class LoginPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : ''
    }
  }

  handleInput = (event) => {
    console.log(event)
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  displayLogin(){
    console.log(this.state)
  }

  render(){
    return(
      <div>
        <h1 className="heading">Welcome to Login Page</h1>
        <img src={require("../images/20170520_115450.jpg").default} style={{'width': '250px'}} alt="local"/>

<img className="ship-img" src="https://img-getpocket.cdn.mozilla.net/296x148/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fpocket-image-cache.com%2F1200x%2Ffilters%3Aformat(jpg)%3Aextract_focal()%2Fhttps%253A%252F%252Fhips.hearstapps.com%252Fhmg-prod.s3.amazonaws.com%252Fimages%252Fthe-white-star-line-passenger-liner-r-m-s-titanic-embarking-news-photo-1608252641.%253Fcrop%253D1.00xw%253A1.00xh%253B0%252C0%2526resize%253D640%253A*" alt="url"/>
        
        <div className="bottom-space">
          <label className="lable-Text">Enter your Email Id :</label>
          <input type="email" placeholder="Please enter your email id" className="input-space" onChange={this.handleInput} name="email"/>
        </div>

        <div className="bottom-space">
          <label className="lable-Text">Enter your Password :</label>
          <input type="password" placeholder="Please enter your password" className="input-space" onChange={this.handleInput} name="password"/>
        </div>

        <div className="bottom-space">
          <button onClick={() => this.displayLogin()}>Login</button>
        </div>

        <div>
          <h2>The typed email is - {this.state.email}</h2>
          <h2>The typed password is - {this.state.password}</h2>
        </div>
      </div>
    )
  }
}

export default LoginPage;