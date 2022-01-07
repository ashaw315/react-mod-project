import React from "react";
import splash from "./images/memphis-splash.png"

function SplashPage() {
    return (
      <main style={{ padding: "0.25rem 0" }}>
        <div>
        <div>
              <div className="fixed-bg-1">
                <img className="image-2" src={splash}/>
              </div>
            </div>
        </div>
      </main>  
    )
}

export default SplashPage;

