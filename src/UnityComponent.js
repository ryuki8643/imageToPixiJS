import React from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
  loaderUrl: 'Build/UnityLoader.js',
  dataUrl: 'Build/projectName.data',
  frameworkUrl: 'Build/projectName.framework.js',
  codeUrl: 'Build/projectName.wasm',
});

function UnityComponent() {
  return <Unity unityContext={unityContext} />;
}

export default UnityComponent;
