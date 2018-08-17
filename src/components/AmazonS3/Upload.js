 import React, {Component} from "react"
 import S3FileUpload from "react-s3"
 import config from "./s3_config"

class Upload extends Component {
    upload(e){
        console.log(e.target.files[0]);
        const file = e.target.files[0]
        S3FileUpload.uploadFile(file,config).then(data=> console.log(data))
        .catch(err => console.error(err))
    }
    render(){
   return <div>
       <input type="file" onChange={(e)=>this.upload(e)}/>

   </div>
    }
 
}
export default Upload;