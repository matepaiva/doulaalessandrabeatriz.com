import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { DateTime } from 'luxon';
import { Section } from 'components';

const MEDIUM_URL = 'https://medium.com';
const MEDIUM_USERNAME = '@ale.beatrizs';
const BASE_IMAGE_URL = 'https://cdn-images-1.medium.com/max/400/';

const MediumPost = ({ title, imageUrl, subtitle, postUrl, date }) => (
    <Card>
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
