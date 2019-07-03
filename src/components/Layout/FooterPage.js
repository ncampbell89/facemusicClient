import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css';

class FooterPage extends Component {
  
  render() {
    let footer;

    if(window.location.href === `/requests`) {
      footer = (
        <MDBFooter className="font-small w-100 p-3 bg-dark" style={{position: 'absolute', bottom: '0'}}>
          <MDBContainer fluid className="text-center align-middle text-md-left">
            <MDBRow style={{display: 'flex', justifyContent: 'center'}}>
    
                <ul style={{ display: 'flex' }} className="footerList">
                  <li className="list-unstyled">
                    <a href="#!">Support</a>
                  </li>
                  <li className="list-unstyled ml-3">
                    <a href="#!">FAQ</a>
                  </li>
                  <li className="list-unstyled ml-3">
                    <a href="#!">Settings</a>
                  </li>
                </ul>
                &emsp; &emsp;
                <a className="copyrighted-badge" 
                    title="Copyrighted.com Registered & Protected" 
                    target="_blank" href="https://www.copyrighted.com/website/XGdESQN8ZZWbHUaJ">
                  <img alt="Copyrighted.com Registered &amp; Protected" 
                    border={0} width={125} height={25} 
                    srcSet="https://static.copyrighted.com/badges/125x25/03_1_2x.png 2x" 
                    src="https://static.copyrighted.com/badges/125x25/03_1.png" />
                </a>
                {new Date().getFullYear()}
                <script src="https://static.copyrighted.com/badges/helper.js"></script>
    
            </MDBRow>
          </MDBContainer>
        </MDBFooter>
      )
    } else {
      footer = (
        <MDBFooter className="font-small w-100 p-3 bg-dark" style={{position: 'absolute'}}>
          <MDBContainer fluid className="text-center align-middle text-md-left">
            <MDBRow style={{display: 'flex', justifyContent: 'center'}}>

                <ul style={{ display: 'flex' }}>
                  <li className="list-unstyled">
                    <a href="#!">Support</a>
                  </li>
                  <li className="list-unstyled ml-3">
                    <a href="#!">FAQ</a>
                  </li>
                  <li className="list-unstyled ml-3">
                    <a href="#!">Settings</a>
                  </li>
                </ul>
                &emsp; &emsp;
                <a className="copyrighted-badge" 
                    title="Copyrighted.com Registered & Protected" 
                    target="_blank" href="https://www.copyrighted.com/website/XGdESQN8ZZWbHUaJ">
                  <img alt="Copyrighted.com Registered &amp; Protected" 
                    border={0} width={125} height={25} 
                    srcSet="https://static.copyrighted.com/badges/125x25/03_1_2x.png 2x" 
                    src="https://static.copyrighted.com/badges/125x25/03_1.png" />
                </a>
                {new Date().getFullYear()}
                <script src="https://static.copyrighted.com/badges/helper.js"></script>

            </MDBRow>
          </MDBContainer>
        </MDBFooter>
      )
    }

    return (
      footer
    )
  }
}

export default FooterPage;