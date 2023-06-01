import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityComponent() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/Build.loader.js",
    dataUrl: "Build/Build.data",
    frameworkUrl: "Build/Build.framework.js",
    codeUrl: "Build/Build.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default UnityComponent;
