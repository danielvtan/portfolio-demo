
import Profile from "../components/Profile";

export default function Home() {

    const user = {
        fullName: "Daniel Tan",
        workTitle: "Lead Software Engineer",
        location: "Bulacan, PH 🇵🇭",
        email: "dan@builtamart.com",
        profilePhoto: "https://media-exp1.licdn.com/dms/image/C5603AQEAT7dcavXo1w/profile-displayphoto-shrink_800_800/0/1644996329505?e=1659571200&v=beta&t=x_ahEPdMMpX9LNtqTI35Mnl8fVxpOEAPAxGKlwohSCo",
        socials: [{
            icon: "facebook",
            url: "https://facebook.com/daniel.v.tan",

        }, {
            icon: "twitter",
            url: "https://twitter.com/daniel.v.tan"
        }, {
            icon: "linkedin",
            url: "https://twitter.com/daniel.v.tan"
        }]
    }
    return (
        <>
            <Profile user={user} />
        </>
    )
}

