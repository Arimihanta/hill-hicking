import React,{ useState } from 'react'
import { Row, Col,Card,Form, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { Link,useRouteMatch  } from "react-router-dom"

//image
import img20191021_090541 from './../assets/photo/ambodirano/20191021_090541.jpg'
import img20200124_142938 from './../assets/photo/vakinisisaony/20200124_142938.jpg'
import Ambohimanga from './../assets/photo/tana/Ambohimanga.jpg'
import Anosy from './../assets/photo/tana/Anosy.jpg'
import Manjakamiadana from './../assets/photo/tana/Rova.jpg'
const { Meta } = Card;

const data=[
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
        description:"C'est un lac artificiel dans la partie sud de la capitale de Madagascar, Antananarivo, à environ 2 km au sud de la Hauteville."
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
export const TrailGuidePage = () => {
    let match = useRouteMatch()
    const [data_filtered, setData]=useState(data)

    const onSearch=(e)=>{
        setData(data.filter(item=>item.nom.toUpperCase().includes(e.target.value.toUpperCase()))
        )
    }
    return(
        <div className="main-container">
            <Row justify="end"
            >
                <Col span={6}>
                    <Form.Item name="search">
                        <Input 
                            size="middle" 
                            placeholder="Rechercher"
                            onChange={onSearch} 
                            prefix={<SearchOutlined />} 
                            style={{borderRadius:25}}
                            />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16, 24]}>
                {
                    data_filtered.map((item,key)=>
                        <Col key={key} className="gutter-row" span={6}>
                            <Link to={`${match.path}/${item.id}`}>
                                <Card
                                    hoverable
                                    cover={<img className="img-trail" alt="example" src={item.img} />}
                                >
                                    <Meta 
                                        title={item.nom} 
                                        description={item.description} />
                                </Card>
                            </Link>
                        </Col>
                    )
                }
            </Row>
        </div>
    )
}