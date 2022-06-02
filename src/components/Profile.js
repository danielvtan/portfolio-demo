
import { SocialMediaIconsReact } from "social-media-icons-react"


const socialListStyle = {
    display: "inline",
    margin: "5px"
}
const socialListContainerStyle = {
    margin: "20px"
}
export default function Profile(params) {
    const user = params.user;
    return <>
        <img className="profile-photo" src={user.profilePhoto} alt={user.fullName} />
        <h1>I'm {user.fullName}</h1>
        <ul>
            <li>I am a {user.workTitle}</li>
            <li>I live in {user.location}</li>
            <li>contact me {user.email}</li>
        </ul>
        <ul style={socialListContainerStyle}>
            {
                user.socials.map(social => {
                    return <li style={socialListStyle} key={social.icon}>
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" icon={social.icon} url={social.url} size="48" />
                    </li>
                })
            }

        </ul>
    </>
}
