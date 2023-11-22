import React, { useState } from "react";
import Model from 'react-modal';
import styles from "../SignUp/SignUp.module.scss";


export const SignUp = () => {
    const [visible,setvisible] = useState(false)
    return(
        <div className={styles.SignUp}>
            <button onClick={() => setvisible(true)}>SignUp</button>
            <Model isOpen={visible} onRequestClose={() => setvisible(false)} style={{
                overlay: {
                    background: "rgba(0, 0, 0, 0.7)"
                },
                content: {
                    width: "500px",
                    height: "500px"
                }
            }}>
                <h1>Model Body</h1>
                <button onClick={() => setvisible(false)}> Close Model</button>
            </Model>
        </div>
    );
}
