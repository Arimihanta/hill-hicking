import { Button, Col } from "antd"
import { colors } from "../global/colors"
const { primaryColor } = colors

export const ButtonMenu = (props) => {
    return (
        <>
            <Col align={"middle"} md={12} lg={12} xs={24} justify="center" style={{ marginBottom: 20 }}>
                <Col md={24}>
                    <Button
                        shape="circle"
                        {...props}
                        style={{ background: primaryColor, border: primaryColor, width: 130, height: 130 }}
                    >
                        <img alt="..." src={props.photo} />
                    </Button>
                </Col>
                <Col>
                    <h3 style={{ fontWeight: "bold", marginTop: 5 }}>{props.nom}</h3>
                </Col>
            </Col>
        </>
    )
}
