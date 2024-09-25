"use client";
import { useEffect } from "react";

const Loading = () => {
  useEffect(() => {
    // Create a new progress bar element
    const progress = document.createElement("div");
    progress.setAttribute("id", "progress");

    // Create <b> and <i> elements
    const b = document.createElement("b");
    const i = document.createElement("i");

    // Append them to the progress bar
    progress.appendChild(b);
    progress.appendChild(i);

    // Append progress bar to the body
    document.body.appendChild(progress);

    // Animate the progress bar
    setTimeout(() => {
      progress.style.width = "101%"; // Animate width to 101%
    }, 0); // Immediate animation

    // Delay and then fade out the progress bar
    setTimeout(() => {
      progress.style.opacity = "0"; // Fade out animation
    }, 800); // Delay before fading out

    // Remove the progress bar from the DOM after the animation
    setTimeout(() => {
      // Check if the progress bar is still in the DOM before removing
      if (document.body.contains(progress)) {
        progress.remove();
      }
    }, 1800); // 1000ms for width + 800ms for fadeout

    // Cleanup function to remove progress bar if component unmounts
    return () => {
      if (document.body.contains(progress)) {
        progress.remove();
      }
    };
  }, []);

  return <div className="progress"></div>;
};

export default Loading;
