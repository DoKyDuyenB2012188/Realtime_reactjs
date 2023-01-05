import React from 'react'
import {Row, Col, Typography, Button} from "antd";
import {auth} from '../../firebase/config';
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const {Title} = Typography;
export default function Login() {
    const navigate = useNavigate();
    const handlefbLogin = () => {
        const fbProvider = new FacebookAuthProvider();
        signInWithPopup(auth,fbProvider).then((user) =>{
            console.log(user);
            navigate("/")
        }).catch((err)=>{
            console.log(err);
        });
    }
  return (
    <div>
        <Row justify="center" style={{height: 800}}>
            <Col span={8}>
                <Title style={{textAlign: "center"}}>Fun Chat</Title>
                <Button style={{width: "100%", marginBottom: 5}}>Đăng Nhập Bằng Google</Button>
                <Button onClick={handlefbLogin} style={{width: "100%"}}>Đăng nhập bằng Facebook</Button>
            </Col>
        </Row>
    </div>
  )
}
