import GoogleLogin from "@leecheuk/react-google-login";

export default function GoogleLoginButton  () {

    const clientID = "801331285763-0d1jm62ckr7rh40t111vrh0vthrjpc5l.apps.googleusercontent.com";

    const onSuccess = (res)=>{
        console.log("LOGIN SUCCEES! Current user: ", res.profileObj);
    }
    const onFailure = (res)=>{
        console.log("LOGIN FAILED! Current user: ", res);
    }


    return (
        <div style={{margin : "0px 5px"}}  id="signInButton">
            <GoogleLogin
                clientId={clientID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}
