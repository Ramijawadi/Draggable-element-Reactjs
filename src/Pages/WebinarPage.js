import React from 'react'
import styled from 'styled-components';
import { FieldTimeOutlined } from '@ant-design/icons'
import { useDraggable } from 'use-draggable';

const PageWrapper = styled.div`
dispaly:flex;
align-items:center;
justify-content: center;
background:RGBA(51,171,152,0.4);
border-radius: 25px;
height:40px;
margin:auto;
width: 74px;
padding: 8px 3px 3px 0px;
`;

const WebinarPage = ({title}) => {
    const { targetRef } = useDraggable({ controlStyle: true });

    return  (
        <PageWrapper ref={targetRef}>
              <FieldTimeOutlined    style={{ color: "white", fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center',marginBottom:"15px"  }} />
              <p style={{visibility:"visible"}}>{title}</p>
        </PageWrapper>
       )
}

export default WebinarPage; 
