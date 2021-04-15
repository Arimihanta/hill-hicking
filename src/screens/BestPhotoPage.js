import { Row, Col,Card,Image  } from 'antd';

//image
import img20191021_090541 from './../assets/photo/ambodirano/20191021_090541.jpg'
import img20200124_142938 from './../assets/photo/vakinisisaony/20200124_142938.jpg'
import Ambohimanga from './../assets/photo/tana/Ambohimanga.jpg'
import Anosy from './../assets/photo/tana/Anosy.jpg'
import Manjakamiadana from './../assets/photo/tana/Rova.jpg'
const { Meta } = Card;

const images_data=[
    {
        title:"Ambodirano",
        images:[
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
            }
        ]
    },
    {
        title:"Ambohimanga",
        images:[
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
                nom:"Vakinisisaony",
                img:img20200124_142938,
                description:"Au sud de l'Avaradrano, avec pour capitale Alasora et ensuite Andramasina."
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
    }
]
export const BestPhotoPage=()=>{
    return(
        <div className="main-container">
            {
                images_data.map((item,key)=>
                    <Row>
                        <Col span={24}>{item.title}</Col>
                        <Col span={24}>
                            <Row gutter={[16, 24]}>
                                {
                                    item.images.map((item,key)=>
                                        <Col key={key} className="gutter-row" span={4}>
                                            <Card
                                                hoverable
                                                cover={<Image className="img-best-photo" alt="example" src={item.img} />}
                                            >
                                                <Meta 
                                                    title={item.nom}  />
                                            </Card>
                                        </Col>
                                    )
                                }
                            </Row>
                        </Col>
                    </Row>
                )
            }
        </div>
    )
}