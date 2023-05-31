import React from 'react';
import  { Unity,useUnityContext } from 'react-unity-webgl';

const {unityProvider} = new useUnityContext({
  loaderUrl: 'Build/Build.loader.js',
  dataUrl: 'Build/Build.data',
  frameworkUrl: 'Build/Build.framework.js',
  codeUrl: 'Build/Build.wasm',
});

function UnityComponent() {
  return <Unity unityProvider={unityProvider} />;
}

export default UnityComponent;
