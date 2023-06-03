import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityComponent() {
  const { unityProvider,unload } = useUnityContext({
    loaderUrl: "Build/Build.loader.js",
    dataUrl: "Build/Build.data",
    frameworkUrl: "Build/Build.framework.js",
    codeUrl: "Build/Build.wasm",
  });

  async function handleClickBack() {
    await unload();
    // Ready to navigate to another page.
  }

  return (
    <>
      <Unity style={{ width: "100%", height: 300 }} unityProvider={unityProvider} />
      <button onClick={handleClickBack}>Unload</button>
      </>
  );
}

export default UnityComponent;
