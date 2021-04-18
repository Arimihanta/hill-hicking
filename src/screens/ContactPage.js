import React,{ useState } from 'react'
import { Row, Col,Form, Input,Typography  } from 'antd';
import {Button as AButton} from '../components/Button'
import emailjs from 'emailjs-com';
const { Title, Text } = Typography
const { TextArea } = Input;

export const ContactPage=()=>{
    const [first_name,setFirstName]=useState('')
    const [last_name,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [subject,setSubject]=useState('')
    const [message,setMessage]=useState('')

    const onChangeInput = (e) => {
        let value = e.target.value
        let name = e.target.name
        switch(name){
            case 'first_name':
                setFirstName(value)
                break
            case 'last_name':
                setLastName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'subject':
                setSubject(value)
                break
            case 'message':
                setMessage(value)
                break
            default :
                break
        }
    }

    const handleSubmit=(e)=>{
        console.log('ato')
        e.preventDefault()
        let templateParams = {
            from_name:first_name+' '+last_name,
            from_email: email,
            to_name: 'aarimihanta@gmail.com',
            subject: subject,
            message: message,
        }
        emailjs.send('service_qmqxojg', 'template_wb6pabk', templateParams,'user_K798VhRMbppDw5mFNtgga')
        .then((result) => {
            console.log(result.text);
            resetForm()
        }, (error) => {
            console.log(error.text);
        });
    }
    const resetForm=()=>{
        setFirstName('')
        setLastName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }
    return(
        <div className="main-container">
            <Row>
                <Col span={24}>
                    <Title 
                        level={3}
                        style={{
                            marginTop:30,
                            marginBottom:20
                        }}
                    >Contact Us</Title>
                </Col>
                <Col span={24}>
                    <Row justify="space-between">
                        <Col md={12}>
                            
                        </Col>
                        <Col md={12}>
                            <Form
                                layout="vertical"
                                initialValues={{
                                    remember: true,
                                }}
                            >
                                <Row justify="space-between">
                                    <Col md={11}>
                                        <Form.Item
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Veuillez entrer le nom',
                                                },
                                            ]}
                                        >
                                            <Input 
                                                size="large" 
                                                placeholder="Nom" 
                                                onChange={onChangeInput}
                                                name="first_name"
                                                value={first_name}
                                                />
                                        </Form.Item>
                                    </Col>
                                    <Col md={11}>
                                        <Form.Item
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Veuillez entrer le prénom(s)',
                                                },
                                            ]}
                                        >
                                            <Input  size="large" placeholder="Prénom" onChange={onChangeInput} name="last_name" value={last_name}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Form.Item
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Veuillez entrer l\'adresse e-mail',
                                        },
                                    ]}>
                                    <Input size="large" 
                                            placeholder="E-mail" onChange={onChangeInput}  name="email" value={email}/>
                                </Form.Item>
                                <Form.Item
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Veuillez entrer l\'objet',
                                        },
                                    ]}>
                                    <Input size="large" 
                                            placeholder="Objet" onChange={onChangeInput}  name="subject" value={subject}/>
                                </Form.Item>
                                <Form.Item>
                                    <TextArea placeholder="Votre message" rows={4} onChange={onChangeInput} name="message" value={message}/>
                                </Form.Item>
                                <Form.Item>
                                    <Text>Les informations recueillies à partir de ce formulaire sont enregistrées et transmises aux agents de Hicking chargés du traitement de votre message.</Text>
                                </Form.Item>
                                <Form.Item>
                                    <AButton 
                                        type="submit" 
                                        shape="round"
                                        style={{width:"150px"}}
                                        onClick={handleSubmit}
                                        >
                                        Envoyer
                                    </AButton>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}