import React from 'react'
import MagneticGSApp from '../components/MagneticGsap'
import BootstrapLogo from '../images/bootstrap-5-1.svg'
import CLogo from '../images/c.svg'
import CodeigniterLogo from '../images/codeigniter.svg'
import NodeJSLogo from '../images/nodejs-2.svg'
import JqueryLogo from '../images/jquery-6.svg'
import PyLogo from '../images/python-package-index-1.svg'
import MysqlLogo from '../images/mysql-4.svg'
import GitLogo from '../images/git-bash.svg'
import UbuntuLogo from '../images/ubuntu-4.svg'
import OracleLogo from '../images/oracle-6.svg'
import CiscoLogo from '../images/cisco-2.svg'
export function Skills() {
  return (
    <div className="container-fluid">
      <div className="hero__images">
      <MagneticGSApp>
        <div className="hero__image">
        <img
           width="250"
            alt="SVG Logo"
            src={ BootstrapLogo }
            draggable="false"
            fetchPriority="high"
        />
        </div>
      </MagneticGSApp>

      <MagneticGSApp>
        <div className="hero__image">
        <img
           width="250"
            alt="SVG Logo"
            src={ JqueryLogo }
            draggable="false"
            fetchPriority="high"
        />
        </div>
      </MagneticGSApp>
      
      <MagneticGSApp>
        <div className="hero__image">
        <img
             width="250"
            alt="SVG Logo"
            // className="svg-logo"
            src={ CLogo }
            draggable="false"
            fetchPriority="high"
        />
        </div>
      </MagneticGSApp>

      <MagneticGSApp>
        <div className="hero__image">
        <img
            width="250"
            alt="SVG Logo"
            // className="svg-logo"
            src={ CodeigniterLogo }
            draggable="false"
            fetchPriority="high"
        />
        </div>
      </MagneticGSApp>

      <MagneticGSApp>
        <div className="hero__image">
        <img
             width="250"
            alt="SVG Logo"
            // className="svg-logo"
            src={ NodeJSLogo }
            draggable="false"
            fetchPriority="high"
        />
        </div>
      </MagneticGSApp>

      <MagneticGSApp>
        <div className="hero__image">
        <img
            width="250"
            alt="SVG Logo"
            // className="svg-logo"
            src={ PyLogo }
            draggable="false"
            fetchPriority="high"
        />
        </div>
      </MagneticGSApp>
<div className='mx-2'></div>
    <MagneticGSApp>
        <div className="hero__image">
        <img
            width="250"
            alt="SVG Logo"
            // className="svg-logo"
            src={ MysqlLogo }
            draggable="false"
            fetchPriority="high"
        />
        </div>
      </MagneticGSApp>

      <MagneticGSApp>
        <div className="hero__image">
        <img
            width="250"
            alt="SVG Logo"
            // className="svg-logo"
            src={ GitLogo }
            draggable="false"
            fetchPriority="high"
        />
        </div>
      </MagneticGSApp>

      <MagneticGSApp>
        <div className="hero__image">
        <img
             width="250"
            alt="SVG Logo"
            // className="svg-logo"
            src={ UbuntuLogo }
            draggable="false"
            fetchPriority="high"
        />
        </div>
      </MagneticGSApp>

      <MagneticGSApp>
        <div className="hero__image">
        <img
             width="250"
            alt="SVG Logo"
            // className="svg-logo"
            src={ OracleLogo }
            draggable="false"
            fetchPriority="high"
        />
        </div>
      </MagneticGSApp>

      <MagneticGSApp>
        <div className="hero__image">
        <img
             width="250"
            alt="SVG Logo"
            // className="svg-logo"
            src={ CiscoLogo }
            draggable="false"
            fetchPriority="high"
        />
        </div>
      </MagneticGSApp>

    </div>
    {/* ./skill lainnya */}
    </div>
  )
}
