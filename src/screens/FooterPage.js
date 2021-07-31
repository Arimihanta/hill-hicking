import { Layout,  Button,Space } from "antd"
import { colors } from "../global/colors"
import {
    HomeOutlined,
    ContactsOutlined,
    PictureOutlined,
    EnvironmentOutlined
} from "@ant-design/icons"
import { Link } from "react-router-dom"

const { Footer } = Layout
const { primaryColor, primaryDarkColor } = colors

export const FooterPage = (props) => {
    return (
        <Footer
            className="footer"
            style={{
                background: primaryColor,
                zIndex: "10",
                width: "100%",
                height:"250px",
                borderBottom: "1px solid #f0f0f0"
            }}
        >
            <div
                style={{
                    height: "62px",
                    color: "white",
                    display: "inline-block",
                    fontWeight: "bold",
                    alignContent:"center",
                    displayContent:"center",
                    
                }}
            >
                <Space size={7} style={{ float: "right" }}>
                    <Button className="button-menu footer">
                        <Link to="/">
                            <HomeOutlined style={{ color: primaryDarkColor }} /> Accueil
                        </Link>
                    </Button>
                    <Button className="button-menu footer">
                        <Link to="/trail-guide">
                            <EnvironmentOutlined style={{ color: primaryDarkColor }} /> Guide des sentiers
                        </Link>
                    </Button>
                    <Button className="button-menu footer">
                        <Link to="/circuits">
                            <EnvironmentOutlined style={{ color: primaryDarkColor }} /> Circuits
                        </Link>
                    </Button>
                    <Button className="button-menu footer">
                        <Link to="/photos">
                            <PictureOutlined style={{ color: primaryDarkColor }} /> Meilleures photos
                        </Link>
                    </Button>
                    <Button className="button-menu footer">
                        <Link to="/contact">
                            <ContactsOutlined style={{ color: primaryDarkColor }} /> Contacts
                        </Link>
                    </Button>
                </Space>
            </div>
        </Footer>
    )
}
