import { Carousel,Typography , Row, Col} from 'antd';
import {
    EyeOutlined,
    FlagOutlined,
    FileWordOutlined,
    EnvironmentOutlined
} from "@ant-design/icons"
import {FooterPage} from './FooterPage'
import { colors } from "../global/colors"
import img20191021_090541 from './../assets/photo/ambodirano/20191021_090541.jpg'
import img20191021_105312 from './../assets/photo/ambodirano/20191021_105312.jpg'
import img20200130_101349 from './../assets/photo/avaradrano/20200130_101349.jpg'
import img20200124_142938 from './../assets/photo/vakinisisaony/20200124_142938.jpg'
import img20191203_133618 from './../assets/photo/ambodirano/20191203_133618.jpg'
import img20191021_084319 from './../assets/photo/ambodirano/20191021_084319.jpg'
import Ambohimanga from './../assets/photo/tana/Ambohimanga.jpg'
const { primaryDarkColor } = colors

const { Title } = Typography;
export const HomePage=()=>{
    return(
        <div>
            <Carousel 
                autoplay
                fade
                autoplaySpeed={3000}
                >
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
                <Title level={3}>Analamanga a été choisie pour être la destination pilote de développement du tourisme de randonnée. La réalisation du programme pilote a été  confie a l’ORTANA de part ses missions et surtout  de son expérience dans le domaine.</Title>
            </div>
            <Row
                justify="space-between"
                style={{
                    margin:100
                }}
                >
                <Col md={12}>
                    <div className="fl-desc-group-content">
                        <EyeOutlined
                            style={{ 
                                color: primaryDarkColor,
                                fontSize:80,
                                margin:10
                            }} 
                            
                            />
                        <Title level={4} className="txt-content">Le projet {`<<TREK DES COLLINES SACREES>>`} constitue la mise en tourisme de ces sites historiques .Développé en 9étapes sur 182km ; le projet  vise non seulement à allonger la durée de séjour à Analamanga en proposant un produit sur 9 jours ,mais également à développer la contribution du tourisme dans l’économie régionale ; le projet entre dans le cadre de la relance le tourisme nationale après la crise du covid-19  </Title>
                    </div>
                </Col>
                <Col md={12} 
                    justify="center"
                    >
                    <div 
                        class="container">
                        <img 
                            src={img20191203_133618} 
                            alt="Avatar" 
                            class="image"/>
                        <div class="overlay">
                            <div class="text">La vie paysanne à découvrir et à vivre.</div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row
                justify="space-between"
                style={{
                    margin:100
                }}
                >
                <Col md={12} justify="center">
                    <div 
                        class="container">
                        <img 
                            src={img20191021_084319} 
                            alt="Avatar" 
                            class="image"/>
                        <div class="overlay">
                            <div class="text">Disque de pierre à Fidasiana, commune rurale d'Antsahadinta.</div>
                        </div>
                    </div>
                </Col>
                <Col md={12}>
                    <div className="fl-desc-group-content">
                        <EnvironmentOutlined
                            style={{ 
                                color: primaryDarkColor,
                                fontSize:80,
                                margin:10
                            }} 
                            
                            />
                        <Title level={4} className="txt-content">La région Analamanga possède des atouts touristiques qu’on ne peut comparer à ceux des autres coins de l’île, où le tourisme balnéaire est en plein essor ou encore les littoraux qui ont de fortes potentialités touristiques. La région touristique d’Antananarivo est comprise entre les axes des routes nationales avec les villes célèbres, beaux paysages, la diversité et le nombre important de ses sites touristiques qui ont toujours donné la réputation de la province. </Title>
                    </div>
                </Col>
            </Row>
            <Row
                justify="space-between"
                style={{
                    margin:100
                }}
                >
                <Col md={12}>
                    <div className="fl-desc-group-content">
                        <FlagOutlined
                            style={{ 
                                color: primaryDarkColor,
                                fontSize:80,
                                margin:10
                            }} 
                            
                            />
                        <Title level={4} className="txt-content">Le patrimoine, objet du tourisme culturel est matériel et immatériel : - patrimoine matériel : sites consacrés à la culture, réalisation de la main de l’homme comme les musées, les monuments, villes et villages, édifices religieux et militaire etc...</Title>
                    </div>
                </Col>
                <Col md={12} justify="center">
                    <div 
                        class="container">
                        <img 
                            src={Ambohimanga} 
                            alt="Avatar" 
                            class="image"/>
                        <div class="overlay">
                            <div class="text">Le palais Royal d'Ambohimanga.</div>
                        </div>
                    </div>
                </Col>
            </Row>
            <FooterPage/>
        </div>
    )
}