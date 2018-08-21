import React from "react";
import Upload from "../AmazonS3/Upload"
import Download from "../AmazonS3/Download"
const styles={
    root : {
        backgroundColor:'#FAFBFC',
        height:"80px",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        textAlign: "center"
    }
}
const Footer = ()=>{
    return(
        <div className="Footer" style={styles.root}>
        <Upload />Footer
        <Download/>
    </div>)
}

export default Footer;