import { Divider } from '@material-ui/core'
import React from 'react'


const Media = () => {
    const width = '100%';
    const height = '280';
    const allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    const frameborder = '0';

    const videoUrls = [
        "https://www.youtube.com/embed/7Oei4aI_1j8",
        "https://www.youtube.com/embed/TlBlqEbPxBM",
        "https://www.youtube.com/embed/MrZF-LgNSkw",
        "https://www.youtube.com/embed/YBFI77hegBA",
        "https://www.youtube.com/embed/e91eFSK5VBw"
    ]

    return (
        <div style={mainDiv}>
            
            <h2>Media</h2>
            <Divider style={{height: '0.2rem', backgroundColor: 'black'}} />
            <div style={{textAlign: 'center'}}>
                {videoUrls.map((url, index) => (
                    <div key={index} style={impLinks}>
                    <iframe width={width} height={height} src={url} frameBorder={frameborder} allow={allow} allowFullScreen></iframe>
                </div>
                ))}
            </div>
            
        </div>
    )
}

const mainDiv = {
marginTop: '7rem'
}

const impLinks = {
display: 'inline-block',
margin: '2rem'
}
        

export default Media
