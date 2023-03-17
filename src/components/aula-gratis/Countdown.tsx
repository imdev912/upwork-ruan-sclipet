import React from "react";

const Countdown = () => {
    const [count, setCount] = React.useState(1500);
    const [countdown, setcountdown] = React.useState({
        hour: 0,
        minute: 0,
        second: 0
    });
    const updateCount = () => {
        setCount(prev => {
            return prev > 0 ? prev - 1 : prev;
        });
    }

    React.useEffect(() => {
        const countdownInterval = setInterval(updateCount, 1000);
        return () => clearInterval(countdownInterval);
    }, []);

    React.useEffect(() => {
        let hh = 0;
        let mm = 0;
        let ss = count;

        if (ss >= 60) {
            mm = ss / 60;
            ss = ss % 60;
        }

        if (mm >= 60) {
            hh = mm / 60;
            mm = mm % 60;
        }

        setcountdown({
            hour: parseInt(hh.toString()),
            minute: parseInt(mm.toString()),
            second: parseInt(ss.toString())
        });
    }, [count]);

    return (
        <div
            style={{
                display: "flex",
                gap: "5px"
            }}
        >
            <div
                style={{
                    textAlign: "center",
                    fontWeight: "700",
                    width: "65px"
                }}
            >
                <div
                    style={{
                        fontSize: "30px"
                    }}
                >
                    { countdown.hour.toString().padStart(2, '0') }
                </div>

                <div
                    style={{
                        fontSize: "12px",
                        lineHeight: "25px"
                    }}
                >
                    Horas
                </div>
            </div>

            <div
                style={{
                    textAlign: "center",
                    fontWeight: "700",
                    width: "65px"
                }}
            >
                <div
                    style={{
                        fontSize: "30px"
                    }}
                >
                    {countdown.minute.toString().padStart(2, '0')}
                </div>

                <div
                    style={{
                        fontSize: "12px",
                        lineHeight: "25px"
                    }}
                >
                    Minutos
                </div>
            </div>

            <div
                style={{
                    textAlign: "center",
                    fontWeight: "700",
                    width: "65px"
                }}
            >
                <div
                    style={{
                        fontSize: "30px"
                    }}
                >
                    {countdown.second.toString().padStart(2, '0')}
                </div>

                <div
                    style={{
                        fontSize: "12px",
                        lineHeight: "25px"
                    }}
                >
                    Segundos
                </div>
            </div>
        </div>
    );
}

export default Countdown;