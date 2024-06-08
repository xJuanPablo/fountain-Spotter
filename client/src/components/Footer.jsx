import React from "react";

function Footer() {
  return (
    <footer className=".footer">
      <div>
        <p>Don't forget to stay hydrated!</p>

        <div className="fountain-spotter-template-copyright">
          <span>
            @<span>{new Date().getFullYear()}</span> Fountain Spotter
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
