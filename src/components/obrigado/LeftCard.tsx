import PulsateButton from "./PulsateButton";

const LeftCard = () => {
    return (
        <div
            style={{
                backgroundColor: "#6969691C",
                backdropFilter: "blur(5px)",
                padding: "20px 20px 50px 20px",
                borderRadius: "20px",
                flex: 1
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px"
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        marginTop: "-65px"
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" preserveAspectRatio="xMidYMid meet" style={{
                        width: "90px",
                        height: "90px",
                        transform: "translate3d(0px, 0px, 0px)"
                    }}
                    ><defs><clipPath id="__lottie_element_40"><rect width="512" height="512" x="0" y="0"></rect></clipPath><clipPath id="__lottie_element_45"><path d="M0,0 L1000,0 L1000,1000 L0,1000z"></path></clipPath></defs><g clipPath="url(#__lottie_element_40)"><g transform="matrix(0.25,0,0,0.25,256,256)" opacity="1" style={{display: "block"}}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(0,173,233)" fillOpacity="1" d=" M750,-550 C750,-550 750,550 750,550 C750,660.3800048828125 660.3800048828125,750 550,750 C550,750 -550,750 -550,750 C-660.3800048828125,750 -750,660.3800048828125 -750,550 C-750,550 -750,-550 -750,-550 C-750,-660.3800048828125 -660.3800048828125,-750 -550,-750 C-550,-750 550,-750 550,-750 C660.3800048828125,-750 750,-660.3800048828125 750,-550z"></path></g></g><g clipPath="url(#__lottie_element_45)" style={{display: "block"}} transform="matrix(0.3125,0,0,0.3125,99.75,99.75)" opacity="1"><g style={{display: "block"}} transform="matrix(1,0,0,1,482,509)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(203,224,238)" fillOpacity="1" d=" M262,-240 C262,-240 -201.5,63.5 -201.5,63.5 C-201.5,63.5 -173,157.5 -173,157.5 C-173,157.5 -131.5,291.25 -131.5,291.25 C-131.5,291.25 -127.25,307 -117,319.75 C-98.75,340.25 -83.75,305.5 -83.75,305.5 C-83.75,305.5 -76,242 -76,242 C-76,242 -40,110 -40,110 C-40,110 280,-194 280,-194 C280,-194 262,-240 262,-240z"></path><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(203,224,238)" fillOpacity="1" d=" M262,-240 C262,-240 -201.5,63.5 -201.5,63.5 C-201.5,63.5 -173,157.5 -173,157.5 C-173,157.5 -131.5,291.25 -131.5,291.25 C-131.5,291.25 -127.25,307 -117,319.75 C-98.75,340.25 -83.75,305.5 -83.75,305.5 C-83.75,305.5 -76,242 -76,242 C-76,242 -40,110 -40,110 C-40,110 280,-194 280,-194 C280,-194 262,-240 262,-240z"></path></g></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(168,198,223)" fillOpacity="1" d=" M-90.75,123.81300354003906 C-90.75,123.81300354003906 -111.5,302.5 -111.5,302.5 C-111.5,302.5 -116.5,322.5 -108.75,325.25 C-99.28800201416016,328.6080017089844 -88.5,319 -88.5,319 C-88.5,319 28.5,209.5 28.5,209.5 C28.5,209.5 36,133 36,133 C36,133 -90.75,123.81300354003906 -90.75,123.81300354003906z"></path><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(168,198,223)" fillOpacity="1" d=" M-90.75,123.81300354003906 C-90.75,123.81300354003906 -111.5,302.5 -111.5,302.5 C-111.5,302.5 -116.5,322.5 -108.75,325.25 C-99.28800201416016,328.6080017089844 -88.5,319 -88.5,319 C-88.5,319 28.5,209.5 28.5,209.5 C28.5,209.5 36,133 36,133 C36,133 -90.75,123.81300354003906 -90.75,123.81300354003906z"></path></g></g></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fillOpacity="1" d=" M369,-346.5 C369,-346.5 192,-283.5 192,-283.5 C192,-283.5 -206,-128.5 -206,-128.5 C-206,-128.5 -382.5,-53 -382.5,-53 C-382.5,-53 -412.5,-44 -412.5,-21 C-412.5,2 -383.5,10.5 -383.5,10.5 C-383.5,10.5 -197.5,73 -197.5,73 C-197.5,73 245.25,-209.25 245.25,-209.25 C245.25,-209.25 257.875,-218.625 263.75,-212.75 C268.75,-208.25 265.25,-200 265.25,-200 C265.25,-200 -90.75,123.75 -90.75,123.75 C-90.75,123.75 187.5,336.5 187.5,336.5 C187.5,336.5 218.5,369 249,357.5 C279.5,346 281,310 281,310 C281,310 330,85 330,85 C330,85 376,-144 376,-144 C376,-144 406.75,-308.25 406.75,-308.25 C406.75,-308.25 411.875,-329.875 398.25,-343.5 C390.5,-351.25 369,-346.5 369,-346.5z"></path></g></g></g></g></svg>
                </div>

                <div
                    style={{
                        textAlign: "center",
                        fontSize: "25px",
                        fontWeight: "700"
                    }}
                >
                    ENTRE NO CANAL DE TELEGRAM
                </div>

                <div
                    style={{
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: "400",
                        paddingBottom: "20px"
                    }}
                >
                    Essencial para você receber materiais importantes e ter 100% de aproveitamento em tudo que vou te ensinar nas aulas! Além de poder tirar qualquer dúvidas que surgir com nossa equipe de professores!

                    <br />

                    <b
                        style={{
                            color: "#00e4ff"
                        }}
                    >
                        Entre agora clicando no botão abaixo
                    </b>
                </div>

                <PulsateButton />
            </div>
        </div>
    );
}

export default LeftCard;