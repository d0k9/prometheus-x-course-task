import React from 'react'; 

const Footer = () => {
  return(
  <footer>
    <div className="footerContainer" style={{ backgroundColor: '#fff000', fontSize: '10px' }}>
      Виконано в <a href="https://prometheus.org.ua/" target="_blank" rel="noreferrer" >
        Prometheus
      </a>
      &nbsp;© 2022
    </div>
  </footer>)
};
export default Footer;