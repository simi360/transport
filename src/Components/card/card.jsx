import { Fragment } from "react";

import {CardContainer,
        ImageDiv,
        CardHeading,
        CardButtonDiv,
        CardButton
        } from './card.styles'

const Card = ({cardHeading, altimage, ogimage, cardpath}) => {
    return (
        <Fragment>
            <CardContainer>
                <ImageDiv altimage = {altimage} ogimage = {ogimage} />
                <CardHeading>
                    {cardHeading}
                </CardHeading>
                <CardButtonDiv to={cardpath}>
                    <CardButton>
                        Learn more
                    </CardButton>
                </CardButtonDiv>

            </CardContainer>
        </Fragment>
    )
}

export default Card;