import React from 'react';
import styled from 'styled-components';


const Title = styled.h2 `
    font-size: 1.5rem;
`

type SectionProps = {
    title: string,
    body: string
}

const Section:React.FC<SectionProps> = ({ title, body }) => {
  if (!body) return null

  return (
    <div>
        <Title>{title}</Title>
        <div dangerouslySetInnerHTML={{ __html: body}}/>
    </div>
  )
}

export default Section