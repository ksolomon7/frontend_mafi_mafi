import React from 'react'
import Map from './Map'
import {Container, GridColumn} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {Image, Button} from 'semantic-ui-react'

class AboutPage extends React.Component{
    render(){
        return(
            <div className="designer-info">
                <Link className="home-link" to='/'>
                    <Button position="right">Home</Button>
                </Link>
                <h1 className="designer-title">About The Designer</h1>
                <p className="bio">Mahlet Afework is an Ethiopian fashion designer and entrepreneur.
                In 2011, she founded Mafi Mafi, an Ethiopian fashion label.
                She uses hand-woven fabrics made by women from Ethiopia's rural areas to create clothing and accessories.
                She has collaborated with cult UK designer Markus Lupfer and has exhibited at London college of fashion, 
                European Fashion Day in Addis and Africa Fashion Week New York.
                In 2014, she gave a TED Talk about Ancient tradition and modern fashion.</p>
                <Image circular="true" floated="right" className="designer-img" src='data:image/jpeg;base64,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' alt='Mahlet Afework'/>
                
                <p>Locations:</p>
                <Container>
                    <Map/>
                </Container>  
            </div>
        )
    }
}

export default AboutPage