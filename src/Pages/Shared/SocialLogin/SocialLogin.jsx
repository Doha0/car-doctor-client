// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);

    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="text-center">
            <div className="divider">OR</div>
            <button onClick={handelGoogleSignIn} className="btn btn-circle btn-outline ">
                G
            </button>
        </div>
    );
};

export default SocialLogin;