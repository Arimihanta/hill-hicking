import React from 'react'
import { useParams } from "react-router-dom"
import { Row, Col, Card, Typography } from 'antd'
import { EnvironmentOutlined } from '@ant-design/icons'
import { colors } from "../global/colors"
import {FooterPage} from './FooterPage'
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
        name:"La colline sacrée d'Antsahadinta.",
        img:img20191021_090541,
        localisation:"Située de l'autre coté de la plaine à l'ouest d'Antananarivo, dominant la vallée de la Sisaony, Antsahadinta fait partie des douze collines sacrées de l'Imerina avec Androhibe juste à proximité. Elle fut le chef -lieu d'Ambodirano, l'une des quatre subdivisions de l'Imerina ancienne.</p>La colline se trouve à 9°01’ de latitude S et à la 47°27’E de longitude. Actuellement, le village d’Antsahadinta relève du firaisampokontany d’Androhibe, fivondronam-pokontany d’Antananarivo Atsimondrano, faritany d’Antananarivo.",
        description:"Avant d’atteindre le site, un disque de pierre récemment aménagé montre qu’on n’est pas loin du site. Non loin de là, en suivant la montée vers la colline, le syndicat d’initiative a aménagé un chalet, une table d’orientation montrant les sites et collines voisines. C’est un endroit idéal pour une partie de pique nique. L’entrée du site témoigne déjà de l’organisation des éléments s’y trouvant. Le mont Antsahadinta fait partie des rares endroits au cœur de l’Imerina où il y a encore des forêts à caractère primaire. En contournant la colline, continuant vers le Sud, passer par Fidasiana, un village typique qui regorge d'un potentiel touristique culturel, un disque de pierre, servant d’entrée d’un fossé est très remarquable. En quittant le lieu, on trouve un paysage typiquement rural, des successions des rizières sur le bas fond. site Antsahadinta, colline royale renfermant des vestiges historiques importants du 18ème siècle et une forêt où l’on peut encore admirer quelques essences rares, elle passa par des dominations successives, dont celle de la fille d'Andrianamboatsimarofy, Roi d'Antananarivo avant sa défaite devant Andrianampoinimerina. La colline et sa vallée boisée étaient  infestées de sangsues dans ces temps anciens. D’où le nom d’Antsahadinta ou« la vallée des sangsues ». Le village a été fondé vers 1725. Juste avant le dernier virage de la montée d’Antsahadinta, on peut trouver Ampitsinjovana, littéralement « Là où on fait le guet ». De cet endroit, l’on observe une vue imprenable qui donne sur la vallée de Sisaony et sur une chaîne de collines à l’horizon. Jadis, il n’y avait pas encore de moyens de communication. On y faisait donc du feu pour signaler à Antananarivo et aux environs qu’un danger survenait à Antsahadinta. Le jour, c’est la fumée qui alertait les gens, et la nuit, c’était la lueur du feu. Aujourd’hui, une aire de repos y est installée. Le village d’Antsahadinta renferme de considérables vestiges historiques pour Antananarivo. On peut y trouver le tombeau de Rabodozafimanjaka, fille du Roi d'Alasora Andriatsiramanjaka, et l’une des 12 femmes officielles d'Andrianampoinimerina, plus précisément la dixième épouse qui, suspectée de trahison et de manœuvres politiques contre son époux, fut soumise à l’ordalie du tanguin, en mourut et fut enterrée dans la cité royale. Juste à côté, il y a le tombeau de Ratsimisotry, frère de Rabodozafimanjaka qui est décédé en 1320. La Reine se sentant un peu seule à Antsahadinta à cause de la fréquente absence d’Andrianampoinimerina, demanda à ce dernier de lui envoyer son frère pour lui tenir compagnie. Juste à l’entrée du village d’Antsahandita repose Andriamangarira, fondateur d’Antsahadinta, qui a régné de 1725 à 1775. On peut aussi voir la tombe d’Andriamboatsimarofy, qui régna sur Antananarivo avant d’être renversé par Andrianampoinimerina, et de mourir en exil en 1794. Le dernier tombeau est celui du Général Ratsimihara, décédé en 1889, dont les descendants occupent la grande maison de bois voisine. Rappelons qu’au dessus des tombeaux royaux, il y a des petites cases appelées« Trano Masina » dans lesquelles on est censé demander la bénédiction des esprits des Rois décédés. Du Rova qui s’élevait jadis à côté de ces tombeaux de pierre subsistent quelques vestiges, comme le lieu de sacrifice de zébu, la pierre à discours d’Andrianampoinimerina. Il y a également un musée où l’on peut voir les restes des objets utilisés autrefois par la Reine et le Roi, comme le lit royal, le livre d’exercice des jeunes filles, un sabre, des peignes, un des diadèmes de la Reine, le cor pour annoncer que le Roi veut faire un discours, les âtres… Près du village royal d’Antsahadinta, on peut aussi voir une forêt qu’on appelle « alan - drazana » avec un sentier de 500 m, dénommé Chemin des amoureux. Rappelons aussi que dans cette partie de la Capitale, on peut croiser plusieurs sortes d’oiseaux, comme les guêpiers, l’hibou malgache, la huppe ou encore des plantes médicinales, comme le «zahana, alampona, hazotokana, tsingila… ». Il faut noter qu’étant un village royal, la présence d’arbres comme les «amontana et aviavy » était remarquée à Antsahadinta. Le village historique d’Antsahadinta qui fait partie des douze collines sacrées de l’Imerina, étant actuellement un patrimoine national, est un grand vestige à visiter pour prendre l’agrément de redécouvrir l’histoire de la royauté d’Antananarivo.",
        coordinates: {
            latitude:-18.44693254,
            longitude:46.5590267,
            zoom: 14
        }
    },
    {
        id:12527,
        name:"La Colline Royale d’Ambohimanga",
        img:Ambohimanga,
        localisation:`Le site se trouve à 25 km au Nord de la ville d'Antananarivo sur la route d’Anjozorobe avec bifurcation à gauche, plus précisément 40Km après PK 16, prendre à gauche la petite route qui mène jusqu’à Ambohimanga. Latitude <b>18 ° 45'66 .18 "S</b> et <b>47 ° 33'69 .30" E</b> de longitude. Il relève de la commune rurale d’Ambohimanga Rova, fivondronam-pokontany d\’Antananarivo Avaradrano, Faritany d’Antananarivo. Site de la capitale de l'Imerina sous Andrianampoinimerina , Ambohimanga a été désigné site du patrimoine mondial par l\'UNESCO  en 2001.`,
        description: "La colline se trouve sur la route nationale N°3, environ 21 km au Nord d’Antananarivo. C’était le point de départ des conquêtes du grand Roi Andrianampoinimerina. La colline et  la place fortifiée situé au sommet sont considérées comme les symboles les plus significatifs de l’identité culturelle des Merina et le monument le mieux préservés du Royaume Merina. La colline d’Ambohimanga est classée Patrimoine Mondiale de l’UNESCO le 16 décembre 2001.</p>Le rova dispose un kianja ou place public appelé fidasiana. C’est un endroit où se tienne autrefois les cérémonies, jouissances, les discours lorsque les souverains convoquaient le peuple et actuellement destinée à la célébration du nouvel an malgache. C’est la place ou se trouvait le premier rova d’Ambohimanga, c’est aussi là que fut intronisé le roi Andrianampoinimerina (1787-1810).",
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
        localisation:"",
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
        localisation:"",
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
        localisation:"",
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
        localisation:"",
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
        <div>
        <div className="main-container">
            <Row>
                <Col md={10}>
                    <Card
                        
                        cover={<img className="img-trail" alt="example" src={data.img} />}
                    >
                        <Meta 
                            title={data.name} />
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
                            ><EnvironmentOutlined style={{ color: primaryDarkColor, marginRight:20 }}/>Localisation</Title>
                            <div dangerouslySetInnerHTML={{__html: data.localisation || `Pas d'information disponible.`}}>
                            </div>
                        </div>
                        <div
                            style={{
                                width:'100%',
                                float:'left'
                            }}
                        >
                            <Title
                                level={5}
                            ><EnvironmentOutlined style={{ color: primaryDarkColor, marginRight:20 }}/>Historiques et valeurs exceptionnelles</Title>
                            <div dangerouslySetInnerHTML={{__html: data.description}}>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            </div>
            <FooterPage />
        </div>
    )
}