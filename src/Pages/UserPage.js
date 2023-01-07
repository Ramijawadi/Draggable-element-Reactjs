import React from 'react'
import styled from 'styled-components';
import { UserAddOutlined } from '@ant-design/icons';
import { useDraggable } from 'use-draggable';

const PageWrapper = styled.section`

background-color: #52c41a;
background:clip-path: polygon(50% 0%, 100% 38%, 81% 95%, 18% 96%, 0% 38%);
;
clip-path: polygon(50% 0%, 100% 38%, 81% 95%, 18% 96%, 0% 38%);
;
height:60px;
margin: 10px 0 35px 10px;
width: 70px;
padding: 15px 3px 8px 0px;
border-radius : 15px ;

`;

const UserPage = ({ title }) => {

    const { targetRef } = useDraggable({ controlStyle: true });
    return (
        <div ref={targetRef}>
        
        <PageWrapper  style={{marginBottom:"15px"}} >
            
           
             <UserAddOutlined   style={{ padding: "12px" ,color: "white", fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} /> 
            
            
             
        </PageWrapper>
        <p style={{display:'flex' , justifyContent:'center' , alignItem: 'center'}}>{title}</p>
         </div>
    )
}

export default UserPage; 
