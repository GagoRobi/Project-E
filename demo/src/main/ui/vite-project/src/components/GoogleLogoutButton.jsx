import GoogleLogout from "@leecheuk/react-google-login";

export default function GoogleLogoutButton () {
    const clientID = "801331285763-0d1jm62ckr7rh40t111vrh0vthrjpc5l.apps.googleusercontent.com";

    const onSuccess = (res)=>{
        console.log("LOGOUT SUCCEESFULL!", res);
    }


    return (
        <div style={{margin : "10px 5px"}} id="signOutButton">
            <GoogleLogout
                clientId={clientID}
                buttonText="Logout"
                onSuccess={onSuccess}
            />
        </div>
    )
}
