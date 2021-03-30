import { Button as AntDButton, Row } from "antd"
import { colors } from "../global/colors"

const { primaryColor } = colors

export const Button = (props) => {
    const { type, title, children, size, onClick, disabled, icon, textColor, isReversed, shape } = props

    return (
        <AntDButton
            onClick={onClick}
            disabled={disabled}
            shape={shape}
            size={size || "large"}
            style={{
                ...props.style,
                borderColor: type === "default" ? "#999" : primaryColor,
                background: type === "default" ? "white" : primaryColor
            }}
        >
            <Row
                align="middle"
                justify={"center"}
                style={{
                    flexDirection: isReversed ? "row-reverse" : "row"
                }}
            >
                {icon && icon}
                <span
                    style={{
                        fontWeight: type === "link" ? "bold" : "normal",
                        marginTop: -1,
                        color: type === "default" ? textColor : type === "link" ? textColor : "#fff"
                    }}
                >
                    {children || title}
                </span>
            </Row>
        </AntDButton>
    )
}
