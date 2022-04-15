import React from 'react'
import { userContext } from '../context/UserContext';

export default function UploadProfileImage(props) {
    const {id,image,setImage,defaultImage,text} = props;
    const [imagesrc,setImageSrc] = React.useState(image);

    const {agentDetails,setAgentDetails} = React.useContext(userContext)
    
    function onchangeImage(file){
        setImage(file)
        
        var reader = new FileReader();
        let url = reader.readAsDataURL(file);
                
        reader.onload = function(e){
            setImageSrc(e.target.result)
            setImage(e.target.result)
            
        }
    }
    return (
        <div style={{cursor : 'pointer'}} onClick={()=>document.getElementById(id).click()} className="d-flex justify-content-center align-items-center flex-column mt-5">
            <img style={{width : 96,height : 96, objectFit : 'contain'}} src={imagesrc}></img>
            <p className="mt-3 mb-5">{text}</p>
            <input type="file" id={id} style={{display : 'none'}} onChange={e=>onchangeImage(e.target.files[0])} />
        </div>
    )
}
