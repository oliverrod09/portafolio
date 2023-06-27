import React from "react";

export function ModelVIewer({project}) {
  return (
    <>
      <div className="w-full h-full">
        <model-viewer
        style={{ width: "100%", height: "100%" }}
          src={project.link}
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          poster={project.img1}
          shadow-intensity="1"
        >
          <div className="progress-bar hide" slot="progress-bar">
            <div className="update-bar"></div>
          </div>
          {/* <button slot="ar-button" id="ar-button">
            View in your space
          </button> */}
          {/* <div id="ar-prompt">
            <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
          </div> */}
        </model-viewer>
      </div>
    </>
  );
}
