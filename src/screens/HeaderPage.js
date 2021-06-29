import { Layout,  Button,Space } from "antd"
import { colors } from "../global/colors"
import {
    HomeOutlined,
    ContactsOutlined,
    PictureOutlined,
    EnvironmentOutlined
} from "@ant-design/icons"
import { Link } from "react-router-dom"

const { Header } = Layout
const { primaryColor, primaryDarkColor, bodyColor } = colors

export const HeaderPage = (props) => {
    return (
        <Header
            className="header"
            style={{
                background: bodyColor,
                position: "fixed",
                zIndex: "10",
                width: "100%",
                heigt:"10vh",
                borderBottom: "1px solid #f0f0f0"
            }}
        >
            <div
                className="logo"
                style={{ color: primaryColor, fontWeight: "bold", display: "inline-block", fontSize: "18px" }}
            >
                Hill{" "}
                <span
                    style={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                        padding: 4,
                        fontWeight: "bold",
                        color: "black"
                    }}
                >
                    Hicking
                </span>
            </div>
            <div
                style={{
                    float: "right",
                    height: "62px",
                    color: "white",
                    display: "inline-block",
                    fontWeight: "bold"
                }}
            >
                <Space size={7} style={{ float: "right" }}>
                    <Button className="button-menu">
                        <Link to="/">
                            <HomeOutlined style={{ color: primaryDarkColor }} /> Accueil
                        </Link>
                    </Button>
                    <Button className="button-menu">
                        <Link to="/trail-guide">
                            <EnvironmentOutlined style={{ color: primaryDarkColor }} /> Guide des sentiers
                        </Link>
                    </Button>
                    <Button className="button-menu">
                        <Link to="/circuts">
                            <EnvironmentOutlined style={{ color: primaryDarkColor }} /> Circuits
                        </Link>
                    </Button>
                    <Button className="button-menu">
                        <Link to="/photos">
                            <PictureOutlined style={{ color: primaryDarkColor }} /> Meilleures photos
                        </Link>
                    </Button>
                    <Button className="button-menu">
                        <Link to="/contact">
                            <ContactsOutlined style={{ color: primaryDarkColor }} /> Contacts
                        </Link>
                    </Button>
                </Space>
            </div>
        </Header>
    )
}
