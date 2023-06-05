import React,{useEffect} from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityComponent() {
  const { unityProvider,unload,sendMessage } = useUnityContext({
    loaderUrl: "Build/Build.loader.js",
    dataUrl: "Build/Build.data",
    frameworkUrl: "Build/Build.framework.js",
    codeUrl: "Build/Build.wasm",
  });

  async function handleClickBack() {
    await unload();
  }
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [z, setZ] = React.useState(0);  

  useEffect(() => {

      sendMessage("dolphin", "MoveObject", [x, y, z].join(","));

  }, [x,y,z]);


  return (
    <>
      <Unity style={{ width: "100%", height: 300 }} unityProvider={unityProvider} />
      <button onClick={handleClickBack}>Unload</button>
      <input type="number" value={x} onChange={(e) => setX(e.target.value)} />
      <input type="number" value={y} onChange={(e) => setY(e.target.value)} />
      <input type="number" value={z} onChange={(e) => setZ(e.target.value)} />
      </>
  );
}

export default UnityComponent;
