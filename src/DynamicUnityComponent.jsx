

export default async function DynamicUnityComponent(){
    const { default: UnityComponent } = await import('./UnityComponent');

    return ( <>{UnityComponent() || <div>penguins</div>}</>)

}

