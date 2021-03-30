import { Layout, Menu, Button, Dropdown, Space } from "antd"
import { colors } from "../global/colors"
import {
    //UserOutlined,
    LineChartOutlined,
    HomeOutlined,
    DollarCircleOutlined
} from "@ant-design/icons"
import { Link } from "react-router-dom"

const { Header } = Layout
const { primaryColor, primaryDarkColor, bodyColor } = colors
const menuMenage = (
    <Menu>
        <Menu.Item>
            <Link to="/Menage/">Ajout de menage</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/Menage/members">Lister menage</Link>
        </Menu.Item>
    </Menu>
)

const menuSubvention = (
    <Menu>
        <Menu.Item>
            <Link to="/Subvention/">Nouvelle</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/Subvention/distribution">Distribuer</Link>
        </Menu.Item>
    </Menu>
)
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
                        <Dropdown className="button-menu" overlay={menuMenage} placement="bottomLeft" arrow>
                            <Button>
                                <HomeOutlined style={{ color: primaryDarkColor }} />
                                Endroits
                            </Button>
                        </Dropdown>
                        {/*<Dropdown overlay={menuIndividue} placement="bottomLeft" arrow>
                            <Button>
                                <UserOutlined style={{ color: violet }} />
                                Individus
                            </Button>
                        </Dropdown>*/}
                        <Dropdown className="button-menu" overlay={menuSubvention} placement="bottomLeft" arrow>
                            <Button>
                                <DollarCircleOutlined style={{ color: primaryDarkColor }} />
                                Subventions
                            </Button>
                        </Dropdown>
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
