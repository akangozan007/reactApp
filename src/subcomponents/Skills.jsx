import React from 'react';
import MagneticGSApp from '../components/MagneticGsap';
import BootstrapLogo from '../images/bootstrap-5-1.svg';
import CLogo from '../images/c.svg';
import CodeigniterLogo from '../images/codeigniter.svg';
import NodeJSLogo from '../images/nodejs-2.svg';
import JqueryLogo from '../images/jquery-6.svg';
import PyLogo from '../images/python-package-index-1.svg';
import MysqlLogo from '../images/mysql-4.svg';
import GitLogo from '../images/git-bash.svg';
import UbuntuLogo from '../images/ubuntu-4.svg';
import OracleLogo from '../images/oracle-6.svg';
import CiscoLogo from '../images/cisco-2.svg';

export function Skills() {
  const logos = [
    { src: BootstrapLogo, alt: 'Bootstrap Logo' },
    { src: JqueryLogo, alt: 'jQuery Logo' },
    { src: CLogo, alt: 'C Logo' },
    { src: CodeigniterLogo, alt: 'CodeIgniter Logo' },
    { src: NodeJSLogo, alt: 'Node.js Logo' },
    { src: PyLogo, alt: 'Python Logo' },
    { src: MysqlLogo, alt: 'MySQL Logo' },
    { src: GitLogo, alt: 'Git Logo' },
    { src: UbuntuLogo, alt: 'Ubuntu Logo' },
    { src: OracleLogo, alt: 'Oracle Logo' },
    { src: CiscoLogo, alt: 'Cisco Logo' },
  ];

  return (
    <div className="container-fluid">
      <div className="hero__images">
        {logos.map((logo, index) => (
          <MagneticGSApp key={index}>
            <div className="hero__image">
              <img
                // width="250"
                className='img-fluid'
                alt={logo.alt}
                src={logo.src}
                draggable="false"
                fetchPriority="high"
              />
            </div>
          </MagneticGSApp>
        ))}
      </div>
    </div>
  );
}
