import React from 'react'
import styled from 'styled-components';
import { MailFilled } from '@ant-design/icons';
import { useDraggable } from 'use-draggable';



const PageWrapper = styled.div`
dispaly:flex;
align-items:center;
justify-content: center;
background:RGBA(143,101,152,0.4);
border-radius: 5px;
height:40px;
margin: 25px 0 35px 10px;
width: 70px;
padding: 8px 3px 3px 0px;

`;

const InvitationPage = ({title}) => {

    const { targetRef } = useDraggable({ controlStyle: true });



    return (
        <>
         {useDraggable  ?
            
            <PageWrapper ref={targetRef}>

                <MailFilled  style={{ color: "white", fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' ,marginBottom:"15px" }} />
               <p style={{visibility:"visible"}}>{title}</p>
            </PageWrapper> 
             : 
            <PageWrapper ref={targetRef}>

                <MailFilled  style={{ color: "white", fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' ,marginBottom:"15px" }} />
                
            </PageWrapper> }
            </>
        
    )
}

export default InvitationPage; 
