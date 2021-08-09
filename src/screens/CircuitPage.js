import React from 'react'
import { 
    Steps, 
    Row, 
    Col,
    Typography
 } from 'antd';
 import ReactMapGL,{Marker, Source, Layer} from 'react-map-gl';
 import {FooterPage} from './FooterPage'
 import marker_50px from './../assets/marker_50px.png'
const {Step} = Steps
const { Title } = Typography

const datum=[
    {
        id:14526,
        name:"Anosy",
        description: "C'est un lac artificiel dans la partie sud de la capitale de Madagascar, Antananarivo, à environ 2 km au sud de la Hauteville.",
        coordinates: {
            latitude:-18.9151698,
            longitude:47.52157964,
            zoom: 14
        }
        
    }
]

const layer = {
    'id': 'route',
    'type': 'line',
    'source': 'route',
    'layout': {
        'line-join': 'round',
        'line-cap': 'round'
    },
    'paint': {
        'line-color': 'red',
        'line-width': 8
    }
}
const routes={
    type: "Feature",
    properties: {},
    geometry: {
        type: "LineString",
        coordinates: [
            [-18.44693254, 46.5590267],
            [-18.7613345, 47.5614236],
            [-18.9151698 ,47.52157964],
            [-18.9273968 ,47.60124145],
            [-18.92414411 ,47.53150081],
            [-18.92414411 ,47.53150081]
        ]
    }
} 

export const CircuitPage=()=>{
    const data = (datum.filter(item => item.id === parseInt(14526)))[0]
    
    const [viewport, setViewport] = React.useState(data.coordinates);
    return(
        <div>
            <div className="main-container">
                <Row>
                    <Col md={10}>
                        <Title 
                            level={3}
                            style={{
                                marginTop:30,
                                marginBottom:30
                            }}
                        >Circuits</Title>
                        <Steps 
                            direction="vertical"
                            labelPlacement="vertical"
                            >
                            <Step 
                                status='process'
                                title="Ambohimanga – Ambohimasina" 
                                description="Ambohimanga – Ambohimasina / 15,7 km Sur les traces de Manindrilahy . Cet itineraire traverse la partie Ouest de la colline sacree et non mons royale d’AMBOHIMANGA qui est classées  au patrimone mondial par l’UNESCO. Historiquement le Roi Andrianapoinimerina y a placé les Manindrilahy (ceux qui domptent les hommes)Plusieurs sites historique sont à découvrir sur le trajet comme Amboantany ,Ambatoharanana et Imerimandroso(durée 4h30)" 
                                />
                            <Step 
                                status='process'
                                title="Ambohimasina – Ambohitrimanjaka" 
                                description="Ambohimasina – Ambohitrimanjaka / 24,7 km la traversée de l’Ouest ;cette seconde étape vous plonge dans un monde rurale ou las paysages et les vue magnifiques ; le parcours traverse ou passe à proximimité des sommets historiques tels que Manjakazafy , Ambohodratrimo, ou encore Ambohipiara . L’éco village de tsaratanana , un modèle de développement communautaire ,social et économique mérite également un petit détour(durée 6h)." 
                                />
                            <Step 
                                status='process'
                                title="Ambohitrimanjaka – Antsahadinta" 
                                description="Ambohitrimanjaka – Antsahadinta / 29,6 km au pays des oangers et la vallée de sangsue ; le circuit début à Ambohitrimanjaka avesc ascension progressive vers Ambonivihitra . Dans la première partie du parcours, splendite panorama sur le cœur de la fameuse plaine du Betsimitatatra où les rizière à perte de vue vous attendent ; la deusieeme partie se fait sur lrds cretes des collines  d’Ivatobe ,direction Antsahadinta(durée :7h30) ." />
                            <Step 
                                status='process'
                                title="Antsahadinta – Ambatofotsy" 
                                description="Antsahadinta – Ambatofotsy / 21,5 km entre la Sisaony et l’Anndromba ;ce trajet vous fait découvrir les plus belles vues du sud de la capitale. Du haute des collines d’Ambatomalaza ,d’Ambohijoky vous contemplez les bassins versants de la Sisaony et Andromba ; au fil du parcours  remontez le temps et plongez dans l’histoire en découvrant deux collines sacrées Ambohijoky  colline de Rafotsirabodo épouse d’Andrianapoinimerina et Ampandrana-Ifandro  le berceau du royaume Merina (durée :6h30)." />
                            <Step 
                                status='process'
                                title="Ambatofotsy – Ankadinandriana" 
                                description="Ambatofotsy – Ankadinandriana / 15,3 km du territoire maraichers au pays de fleures ;c’est un profil ideal pour les passionés de randonnées sportive cette etape vous invite à decouvrire le riche territoire des cultures maraichères destinés aux marchés d’Antananarivo et pour terminer votre randonnées à Ankadinandriana,le village de des fleurs .Entre les deux village ,de magnifiques paysage parfois à allure luniaire constituent le decor : roche de granite ,formation  de lavaka (relief née de l’erosion)(durée :5h30)." />
                            <Step 
                                status='process'
                                title="Ankadinandriana – Ambatomanga" 
                                description="Ankadinandriana – Ambatomanga / 18 km cap vers l’Est  cette sixième étape  vous conduit vers l’Est d’Analamanga . La randonnée se fait sur un parcours très varié, parfois très technique (ligne de crêtes, collines ,vallées, cours d’eau) et toujours en reliant les villages typiques sur les collines sacrées quelque soit la saison , les champs et rivière offrent l’occasion d’admirer et vivre la vie rurale des malagasy des hauts plateaux (durée :5h)." />
                            <Step 
                                status='process'
                                title="Ambatomanga – Ambatolampikely" 
                                description="Ambatomanga – Ambatolampikely / 34,8 km la grande traversée de Vakiniadiana cette étape est la plus sportive en terme de distance et de dénivelé mais également la plus riche afin de vous permettre de visiter les beaux villages historique s d’Ambatomanga ,Anerindrano ,Ankadmanga ainsi que la stantion forestière d’Angavokely avec ses orchidées et ses nombreux  ponts de vue. La randonnée part d’Alarobia passe par Ambatomanga , Ankadimanga ,Angavokely avant de terminer à Ambatolampikely sur RN2 qui va vers l’Est .(durée :9h)." 
                                />
                            <Step 
                                status='process'
                                title="Ambatolampikely – Ambohidrabiby" 
                                description="Ambatolampikely – Ambohidrabiby / 15,5 km sur les chemins de Ralambo ;avant dernière étapes de notre trek ,vous partirez à la découverte de cette partie nord-est de la capitale . La terre rouge ,la latérite ,associé au vert de rizières feront sortir les paysages dignes de cartes postale ;sur ce trajet vous traverserez  de nonmbreux anciens vikkages constitués de maison et enclos de terre battue sur les pistes charretières et les sentiers des bouviers(durée 5h)." />
                            <Step 
                                status='process'
                                title="Ambohidrabiby – Ambohimanga" 
                                description="Ambohidrabiby – Ambohimanga / 7,5 km au cœur de l’Avaradrano pour terminer en beauté notre trek ,cette dernière partie plus courte en distance relie les deux collines parmi les plus importantes de l’histoire de l’Imerina :Ambohitrabiby <<la colline de Rahabiby>> fief du Roi Ralambo qui a donné le nom Imerina (ceux qui vivent sur les hauteurs ) et Ambohimanga (la colline bleu) sur les traces du Roi d’Andianampoinimerina(durée :2h30)." />
                        </Steps>
                    </Col>
                    <Col md={14}>
                        <div style={{ height: '88vh', width: '100%' }}>
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
                                <Source type="geojson" data={routes}>
                                    <Layer {...layer}/>
                                </Source>
                            </ReactMapGL>
                        </div>
                    </Col>
                </Row>
            </div>
            <FooterPage />
        </div>
    )
}