import { Carousel,Typography , Row, Col,Card } from 'antd';
import {
    TeamOutlined
} from "@ant-design/icons"
import { colors } from "../global/colors"


//image
import img20191021_090541 from './../assets/photo/ambodirano/20191021_090541.jpg'
import img20191021_105312 from './../assets/photo/ambodirano/20191021_105312.jpg'
import img20200130_101349 from './../assets/photo/avaradrano/20200130_101349.jpg'
import img20200124_142938 from './../assets/photo/vakinisisaony/20200124_142938.jpg'
import Ambohimanga from './../assets/photo/tana/Ambohimanga.jpg'
import Anosy from './../assets/photo/tana/Anosy.jpg'
import Manjakamiadana from './../assets/photo/tana/Rova.jpg'
const { primaryDarkColor } = colors
const { Meta } = Card;
const { Title } = Typography;

const data=[
    {
        nom:"Ambodirano",
        img:img20191021_090541,
        description:"Situé au sud du Marovatana, avec pour capitale Fenoarivobe du district de Fenoarivobe."
    },
    {
        nom:"Ambohimanga",
        img:Ambohimanga,
        description:"La colline à Madagascar, située approximativement à 24 km au nord-est de la capitale Antananarivo, sur laquelle est établie une place forte royale traditionnelle."
    },
    {
        nom:"Anosy",
        img:Anosy,
        description:"C'est un lac artificiel dans la partie sud de la capitale de Madagascar, Antananarivo, à environ 2 km au sud de la Hauteville."
    },
    {
        nom:"Avaradrano",
        img:img20191021_090541,
        description:""
    },
    {
        nom:"Manjakamiadana",
        img:Manjakamiadana,
        description:"Le palais de la Reine qui est l'ancienne demeure officielle des souverains de Madagascar au xixe siècle."
    },
    {
        nom:"Vakinisisaony",
        img:img20200124_142938,
        description:"Au sud de l'Avaradrano, avec pour capitale Alasora et ensuite Andramasina."
    }
]
export const TrailGuidePage=()=>{
    return(
        <div className="main-container">
            <Row gutter={[16, 24]}>
                {
                    data.map((item,key)=>
                        <Col key={key} className="gutter-row" span={6}>
                            <Card
                                hoverable
                                cover={<img className="img-trail" alt="example" src={item.img} />}
                            >
                                <Meta 
                                    title={item.nom} 
                                    description={item.description} />
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </div>
    )
}