import React from 'react'
import { useParams } from "react-router-dom"
import { Row, Col, Card, Typography } from 'antd'
import { EnvironmentOutlined } from '@ant-design/icons'
import GoogleMapReact from 'google-map-react'
import { colors } from "../global/colors"

//image
import img20191021_090541 from './../assets/photo/ambodirano/20191021_090541.jpg'
import img20200124_142938 from './../assets/photo/vakinisisaony/20200124_142938.jpg'
import Ambohimanga from './../assets/photo/tana/Ambohimanga.jpg'
import Anosy from './../assets/photo/tana/Anosy.jpg'
import Manjakamiadana from './../assets/photo/tana/Rova.jpg'

const { Meta } = Card;
const { Title } = Typography
const { primaryDarkColor } = colors
const datum=[
    {
        id:12526,
        nom:"Ambodirano",
        img:img20191021_090541,
        description:"Situé au sud du Marovatana, avec pour capitale Fenoarivobe du district de Fenoarivobe."
    },
    {
        id:12527,
        nom:"Ambohimanga",
        img:Ambohimanga,
        description:"La colline à Madagascar, située approximativement à 24 km au nord-est de la capitale Antananarivo, sur laquelle est établie une place forte royale traditionnelle."
    },
    {
        id:14526,
        nom:"Anosy",
        img:Anosy,
        description: "C'est un lac artificiel dans la partie sud de la capitale de Madagascar, Antananarivo, à environ 2 km au sud de la Hauteville.",
        localisation: {
            
        }
        
    },
    {
        id:12016,
        nom:"Avaradrano",
        img:img20191021_090541,
        description:""
    },
    {
        id:12400,
        nom:"Manjakamiadana",
        img:Manjakamiadana,
        description:"Le palais de la Reine qui est l'ancienne demeure officielle des souverains de Madagascar au xixe siècle."
    },
    {
        id:17326,
        nom:"Vakinisisaony",
        img:img20200124_142938,
        description:"Au sud de l'Avaradrano, avec pour capitale Alasora et ensuite Andramasina."
    }
]
export const TrailGuideDetailsPage = (props) => {
    let { id } = useParams()
    const data =(datum.filter(item=>item.id===parseInt(id)))[0]
    
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    return (
        <div className="main-container">
            <Row>
                <Col md={10}>
                    <Card
                        
                        cover={<img className="img-trail" alt="example" src={data.img} />}
                    >
                        <Meta 
                            title={data.nom} 
                            description={data.description} />
                    </Card>
                    <div style={{ height: '300px', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyDtwSN6B2LNl-z5tWVxO1WUZusKWdSJOzw' }}
                            defaultCenter={{
                                lat: 59.95,
                                lng: 30.33
                                }}
                            defaultZoom={11}
                            >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                            </GoogleMapReact>
                    </div>
                </Col>
                <Col md={14}>
                    <div
                        style={{
                            margin:20
                        }}
                    >
                        <div
                            style={{
                                width:'100%',
                                float:'left'
                            }}
                        >
                            <Title
                                level={5}
                            ><EnvironmentOutlined style={{ color: primaryDarkColor, marginRight:20 }}/>Localisation</Title></div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}