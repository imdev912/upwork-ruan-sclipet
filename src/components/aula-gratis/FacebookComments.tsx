import comments from "../../assets/data/comments.json";

interface PropType {
    "id": number,
    "name": string,
    "image": string,
    "comment": string,
    "emoji": string,
    "time": string,
    "likes": number,
    "thumb": boolean,
    "heart": boolean
};

const CommentQuestion = (props: PropType & {"replies"?: PropType[]} ) => {
    return (
        <div
            style={{
                fontWeight: "500"
            }}
        >
            <div
                style={{
                    display: "flex",
                    gap: "7px"
                }}
            >
                <img
                    src={"" + props.image}
                    width={35}
                    height={35}
                    alt={props.name}
                    loading="lazy"
                    style={{
                        borderRadius: "50%"
                    }}
                />

            <div 
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    width: "100%"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px"
                    }}
                >
                    <div
                        style={{
                            padding: "10px",
                            backgroundColor: "#f0f2f5",
                            borderRadius: "15px"
                        }}
                    >
                        <div
                            style={{
                                fontWeight: "700"
                            }}
                        >
                            {props.name}
                        </div>

                        <div>
                            {props.comment}
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            color: "#6e7074",
                            fontSize: "12px"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                gap: "5px"
                            }}
                        >
                            <strong>Curtir</strong>
                            <strong>Responder</strong>
                            <span>{props.time}</span>
                        </div>

                        <div
                            style={{
                                margin: "-12px 0px 8px 8px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                        padding: "2px 5px",
                                    backgroundColor: "#FFFFFF",
                                    borderRadius: "30px",
                                    boxShadow: "0 0 14px 1px rgba(203, 203, 203, 0.74)"
                                }}
                            >
                                {
                                    props.thumb && (
                                        <img
                                            src="./images/Like-Face.webp"
                                            width={20}
                                            height={20}
                                            alt="thumb"
                                            loading="lazy"
                                            style={{
                                                zIndex: 3
                                            }}
                                        />
                                    )
                                }

                                {
                                    props.heart && (
                                        <img
                                            src="./images/Heart-2.webp"
                                            width={20}
                                            height={20}
                                            alt="heart"
                                            loading="lazy"
                                            style={{
                                                marginLeft: `${ props.thumb  ? "-5px" : "0px"}`,
                                                zIndex: 2
                                            }}
                                        />
                                    )
                                }

                                {
                                    props.emoji !== '' && (
                                        <img
                                            src={props.emoji}
                                            width={20}
                                            height={20}
                                            alt="emoji"
                                            loading="lazy"
                                            style={{
                                                marginLeft: `${props.thumb || props.heart ? "-5px" : "0px"}`,
                                                zIndex: 1
                                            }}
                                        />
                                    )
                                }

                                {
                                    props.likes > 0 && (
                                        <span
                                            style={{
                                                marginLeft: "5px"
                                            }}
                                        >
                                            {props.likes}
                                        </span>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
                {
                    props.replies && props.replies.length > 0 && (
                        <>
                            { props.replies.map(comment => <CommentQuestion key={comment.id} {...comment} />) }
                        </>
                    )
                }
            </div>
            </div>
        </div>
    );
}

const FacebookComments = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <div
                style={{
                    color: "#393939",
                    fontSize: "14px",
                    width: "min(100%, 700px)",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "15px",
                    marginBottom: "50px",
                    boxShadow: "0 0 18px -3px rgba(0,0,0,.5)"
                }}
            >
                <div
                    style={{
                        fontWeight: "700",
                        paddingBottom: "10px",
                        borderBottom: "1px solid #C0C0C0",
                        margin: "15px 15px 0px 15px"
                    }}
                >
                    Mostrando 15 de 187 comentários
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        padding: "15px"
                    }}
                >
                    { comments.map(comment => <CommentQuestion key={comment.id} {...comment} />) }
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "12px",
                        paddingBlock: "15px",
                        borderTop: "1px solid #C0C0C0",
                        margin: "15px",
                        marginTop: "0px"
                    }}
                >
                    <img
                        src="./images/Facebook_logo_square.webp"
                        width={20}
                        height={20}
                        alt="facebook"
                        loading="lazy"
                    />

                    <span>
                        Plug-in social do Facebook
                    </span>
                </div>
            </div>   
        </div>
    );
}

export default FacebookComments; 