import React, { useState } from 'react'
import styled from 'styled-components';
import AudiencePage from '../AudiencePage';
import InvitationPage from '../InvitationPage';
import ReminderPage from '../ReminderPage';
import WebinarPage from '../WebinarPage';
import UserPage from '../UserPage'
import { Modal, Input, message } from 'antd';



const StyledButton = styled.button`{
    color:white;
    background:gray;
    padding : 15px;
    margin: 30px 0 0 5px ;
    border-radius: 20px;
    border:none;
    &:hover {

        border: 0.5px solid gray;
        color:gray;
        background:white;

    }

}`




const PagesWrapper = styled.div`
z-index:-1;
background:white;
height:550px;
width:100px;
padding : 20px;
margin: 100px 0px 0px 80px;
border-radius: 10px;
border:0.5px solid #dfd0d0 ;
`;

const TitleWrapper = styled.h1`

font-size: 30px ;
color:black;
font-weight:350;
text-align :center;

`;


const Content = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const handleDragStart = (e) => {

        console.log("start drag")

    }


    const onFinish = (e) => {
        console.log(e)
        setTimeout(() => {

            message.success('success add')

        }, 2000);

    }


    return (
        <>
            <PagesWrapper>
                <TitleWrapper >Tools</TitleWrapper>
                <InvitationPage draggable onDragStart={(e) => handleDragStart(e)} title="invitation" />
                <ReminderPage title="Reminder" />
                <WebinarPage title="Webinar" />
                <AudiencePage title="Audience" />
                <UserPage title="UserGoal" />
                <StyledButton onClick={showModal} onFinish={onFinish} >
                    Edit page
                </StyledButton>
                <Modal title="Edit Page" open={isModalOpen} save={handleOk} okText="save" onCancel={handleCancel} onFinish={onFinish}>
                    <div>
                        <label> Title</label>
                        <Input height={80} />
                        <label> Form</label>
                        <Input height={20} />
                        <label> Color</label>
                        <Input height={20} />
                        <label> Icon</label>
                        <Input height={20} />
                    </div>

                </Modal>
            </PagesWrapper>


        </>
    )
}

export default Content;





