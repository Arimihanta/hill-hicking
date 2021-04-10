import { Layout, Menu, Button, Dropdown, Space } from "antd"
import { colors } from "../global/colors"
import {
    //UserOutlined,
    LineChartOutlined,
    DollarCircleOutlined
} from "@ant-design/icons"
import { Link } from "react-router-dom"

const { Header } = Layout
const { primaryColor, primaryDarkColor, bodyColor } = colors

export const HeaderPage = (props) => {
    return (
        <div style={{ marginTop: "0px" }}>
            <Header
                className="header"
                style={{
                    background: bodyColor,
                    position: "fixed",
                    zIndex: "1",
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
                                <LineChartOutlined style={{ color: primaryDarkColor }} /> Accueil
                            </Link>
                        </Button>
                        <Button className="button-menu">
                            <Link to="/trail-guide">
                                <LineChartOutlined style={{ color: primaryDarkColor }} /> Guide des sentiers
                            </Link>
                        </Button>
                        <Button className="button-menu">
                            <Link to="/services">
                                <LineChartOutlined style={{ color: primaryDarkColor }} /> Meilleures photos
                            </Link>
                        </Button>
                        <Button className="button-menu">
                            <Link to="/">
                                <LineChartOutlined style={{ color: primaryDarkColor }} /> Contacts
                            </Link>
                        </Button>
                    </Space>
                </div>
            </Header>
        </div>
    )
}
