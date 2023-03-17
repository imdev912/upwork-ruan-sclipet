export const InfoBanner = (props: React.PropsWithChildren) => {
    return (
        <div
            style={{
                textAlign: "center",
                color: "#FFFFFF",
                fontSize: "15px",
                fontWeight: "700",
                lineHeight: "1.2rem",
                letterSpacing: "0",
                padding: "10px",
                backgroundColor: "#DD0000"
            }}
        >
            { props.children }
        </div>
    );
}