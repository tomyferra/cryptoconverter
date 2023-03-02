import React from "react";
import '../stylesheets/Links.css';

function Linksto ( {classText , Text, url} ) {
  return(
    <div className="link col-sm" >
      <a href={url} className="social-media-links" target='_blank' rel='noreferrer' >
        <i className={classText}> {Text}</i>
      </a>
    </div>

  );
}

export default Linksto;