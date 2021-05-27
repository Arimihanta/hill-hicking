import React from 'react'
import { useParams } from "react-router-dom"
import { Row, Col, Card, Typography } from 'antd'
import { EnvironmentOutlined } from '@ant-design/icons'
import { colors } from "../global/colors"
import ReactMapGL, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

//image
import img20191021_090541 from './../assets/photo/ambodirano/20191021_090541.jpg'
import img20200124_142938 from './../assets/photo/vakinisisaony/20200124_142938.jpg'
import Ambohimanga from './../assets/photo/tana/Ambohimanga.jpg'
import Anosy from './../assets/photo/tana/Anosy.jpg'
import Manjakamiadana from './../assets/photo/tana/Rova.jpg'
import marker_50px from './../assets/marker_50px.png'

const { Meta } = Card;
const { Title } = Typography
const { primaryDarkColor } = colors
const datum=[
    {
        id:12526,
        name:"Ambodirano",
        img:img20191021_090541,
        description: "Situé au sud du Marovatana, avec pour capitale Fenoarivobe du district de Fenoarivobe.",
        coordinates: {
            latitude:-18.44693254,
            longitude:46.5590267,
            zoom: 14
        }
    },
    {
        id:12527,
        name:"Ambohimanga",
        img:Ambohimanga,
        description: "La colline à Madagascar, située approximativement à 24 km au nord-est de la capitale Antananarivo, sur laquelle est établie une place forte royale traditionnelle.",
        coordinates: {
            latitude:-18.7613345,
            longitude:47.5614236,
            zoom: 14
        }
    },
    {
        id:14526,
        name:"Anosy",
        img:Anosy,
        description: "C'est un lac artificiel dans la partie sud de la capitale de Madagascar, Antananarivo, à environ 2 km au sud de la Hauteville.",
        coordinates: {
            latitude:-18.9151698,
            longitude:47.52157964,
            zoom: 14
        }
        
    },
    {
        id:12016,
        name:"Avaradrano",
        img:img20191021_090541,
        description: "",
        coordinates: {
            latitude:-18.9273968,
            longitude:47.60124145,
            zoom: 14
        }
    },
    {
        id:12400,
        name:"Manjakamiadana",
        img:Manjakamiadana,
        description: "Le palais de la Reine qui est l'ancienne demeure officielle des souverains de Madagascar au xixe siècle.",
        coordinates: {
            latitude:-18.92414411,
            longitude:47.53150081,
            zoom: 14
        }
    },
    {
        id:17326,
        name:"Vakinisisaony",
        img:img20200124_142938,
        description: "Au sud de l'Avaradrano, avec pour capitale Alasora et ensuite Andramasina.",
        coordinates: {
            latitude:-18.92414411,
            longitude:47.53150081,
            zoom: 14
        }
    }
]
export const TrailGuideDetailsPage = (props) => {
    let { id } = useParams()
    const data = (datum.filter(item => item.id === parseInt(id)))[0]
    
    const [viewport, setViewport] = React.useState(data.coordinates);
    return (
        <div className="main-container">
            <Row>
                <Col md={10}>
                    <Card
                        
                        cover={<img className="img-trail" alt="example" src={data.img} />}
                    >
                        <Meta 
                            title={data.name} 
                            description={data.description} />
                    </Card>
                    <div style={{ height: '300px', width: '100%' }}>
                        <ReactMapGL
                            
                        mapboxApiAccessToken="pk.eyJ1Ijoic2FoaWx0aGFrYXJlNTIxIiwiYSI6ImNrbjVvMTkzNDA2MXQydnM2OHJ6aHJvbXEifQ.z5aEqRBTtDMWoxVzf3aGsg"
                            {...viewport} width="100%" height="100%" onViewportChange={setViewport}
                            mapStyle="mapbox://styles/mapbox/streets-v11"
                        >
                            <Marker latitude={data.coordinates.latitude} longitude={data.coordinates.longitude}>
                                <img
                                    alt="ico-marker"
                                    style={{
                                        width: 24,
                                        height:24
                                    }}
                                    src={marker_50px} />
                            </Marker>
                        </ReactMapGL>
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