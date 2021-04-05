import { Carousel,Typography , Row, Col} from 'antd';
import {
    TeamOutlined
} from "@ant-design/icons"
import { colors } from "../global/colors"
import img20191021_090541 from './../assets/photo/ambodirano/20191021_090541.jpg'
import img20191021_105312 from './../assets/photo/ambodirano/20191021_105312.jpg'
import img20200130_101349 from './../assets/photo/avaradrano/20200130_101349.jpg'
import img20200124_142938 from './../assets/photo/vakinisisaony/20200124_142938.jpg'
const { primaryDarkColor } = colors

const { Title } = Typography;
export const HomePage=()=>{
    return(
        <div>
            <Carousel autoplay>
                <div className="head-image-container">
                    <img 
                        src={img20200124_142938} 
                        alt="Avatar" 
                        className="image"/>
                    <div className="head-text-container">
                        <div className="body-text">
                            <div className="title">Protéger les endroits que vous aimez faire de la randonnée</div>
                            <div className="text">Défendre les espaces de randonnée + Améliorer les sentiers</div>
                        </div>
                    </div>
                </div>
                <div className="head-image-container">
                    <img 
                        src={img20191021_090541} 
                        alt="Avatar" 
                        className="image"/>
                    <div className="head-text-container">
                        <div className="body-text">
                            <div className="title">Protéger les endroits que vous aimez faire de la randonnée</div>
                            <div className="text">Défendre les espaces de randonnée + Améliorer les sentiers</div>
                        </div>
                    </div>
                </div>
                <div className="head-image-container">
                    <img 
                        src={img20191021_105312} 
                        alt="Avatar" 
                        className="image"/>
                    <div className="head-text-container">
                        <div className="body-text">
                            <div className="title">Protéger les endroits que vous aimez faire de la randonnée</div>
                            <div className="text">Défendre les espaces de randonnée + Améliorer les sentiers</div>
                        </div>
                    </div>
                </div>
                <div className="head-image-container">
                    <img 
                        src={img20200130_101349} 
                        alt="Avatar" 
                        className="image"/>
                    <div className="head-text-container">
                        <div className="body-text">
                            <div className="title">Protéger les endroits que vous aimez faire de la randonnée</div>
                            <div className="text">Défendre les espaces de randonnée + Améliorer les sentiers</div>
                        </div>
                    </div>
                </div>
            </Carousel>
            <div className="fl-node-content">
                <Title level={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Title>
            </div>
            <Row
                justify="space-between"
                style={{
                    margin:100
                }}
                >
                <Col md={12}>
                    <div className="fl-desc-group-content">
                        <TeamOutlined 
                            style={{ 
                                color: primaryDarkColor,
                                fontSize:80,
                                margin:10
                            }} 
                            
                            />
                        <Title level={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Title>
                    </div>
                </Col>
                <Col md={12} justify="center">
                    <div 
                        class="container">
                        <img 
                            src="https://www.sport-boutique.com/wp-content/uploads/2015/05/randonne2.jpg" 
                            alt="Avatar" 
                            class="image"/>
                        <div class="overlay">
                            <div class="text">Hill hicking, au sud de Madagascar</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}