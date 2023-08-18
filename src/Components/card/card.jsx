import { Fragment } from "react";

import {CardContainer,
        ImageDiv,
        CardHeading,
        CardButtonDiv,
        CardButton
        } from './card.styles'

const Card = ({cardHeading, altimage, ogimage}) => {
    return (
        <Fragment>
            <CardContainer>
                <ImageDiv altimage = {altimage} ogimage = {ogimage} />
                <CardHeading>
                    {cardHeading}
                </CardHeading>
                <CardButtonDiv>
                    <CardButton>
                        Learn more
                    </CardButton>
                </CardButtonDiv>

            </CardContainer>
        </Fragment>
    )
}

export default Card;