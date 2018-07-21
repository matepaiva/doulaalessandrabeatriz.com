import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { isMobile } from 'react-device-detect';

const MediumPost = ({ title, imageUrl, subtitle, postUrl, date }) => (
    <Card fluid={isMobile}>
        {imageUrl && <Image src={imageUrl} />}
        <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
                <span className='date'>{date}</span>
            </Card.Meta>
            <Card.Description>{subtitle}</Card.Description>
        </Card.Content>
        <Card.Content extra textAlign='right'>
            <a target='blank' href={postUrl}><Icon name='plus' />Ler mais</a>
        </Card.Content>
    </Card>
);

export default MediumPost;
