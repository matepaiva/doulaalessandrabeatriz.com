import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { DateTime } from 'luxon';
import { Section } from 'components';
import MediumPost from './MediumPost';

const MEDIUM_URL = 'https://medium.com';
const MEDIUM_USERNAME = '@aledoula';
const BASE_IMAGE_URL = 'https://cdn-images-1.medium.com/max/300/';

export default class MediumPosts extends Component {
    state = {};

    static defaultProps = {
        maxPosts: 3,
    }

    componentDidMount() {
        fetch(`https://medium-rss-to-json.herokuapp.com/${MEDIUM_USERNAME}/latest`)
            .then((response) => response.json().then((data) => this.setState(data)))
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }

    render() {
        const { response } = this.state;
        const { maxPosts } = this.props;

        if (!Array.isArray(response)) return null;

        return (
            <Section title='Meu blog'>
                <Card.Group centered>{
                    response.slice(0, maxPosts).map(({ title, uniqueSlug, firstPublishedAt, virtuals = {} }, idx) => {
                        const { previewImage = {}, subtitle = '' } = virtuals;
                        const { imageId } = previewImage;
                        const date = DateTime.fromMillis(firstPublishedAt).setLocale('pt').toLocaleString();
                        const postUrl = `${MEDIUM_URL}/${MEDIUM_USERNAME}/${uniqueSlug}`;
                        const imageUrl = imageId && `${BASE_IMAGE_URL}/${imageId}`;

                        return (
                            <MediumPost
                                key={idx}
                                title={title}
                                imageUrl={imageUrl}
                                date={date}
                                subtitle={subtitle}
                                postUrl={postUrl} />
                        );
                    })
                }</Card.Group>
            </Section>
        );
    }
}
