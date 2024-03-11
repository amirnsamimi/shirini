const PrimaryButton = ({text="enter-text-value",color="black",bgColor="white",border="1px solid black",type="button",buttonLink="/"}) => {



if(type === "link"){
    return <a style={{border: border,backgroundColor:bgColor,color:color}} href={buttonLink}> {text} </a>
} else {
   return <button className="primaryButton"  style={{border: border,backgroundColor:bgColor,color:color}}> 
    {text}
    </button>
}


}

export { PrimaryButton }