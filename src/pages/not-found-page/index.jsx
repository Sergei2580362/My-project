import React, { useContext } from 'react';
import { Wrapper, Text, TextWrapper, StylishLink } from './index.style';


export const NotFoundPage = () => {
    return (
        <Wrapper>
            <TextWrapper>
                <Text>
                    Page not found!
                </Text>
                <StylishLink to='/'>
                    Go to main
                </StylishLink>
            </TextWrapper>
        </Wrapper>
    );
};
