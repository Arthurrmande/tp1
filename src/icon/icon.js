import iconFacebook from "../images/icon-facebook.svg";
import iconTwitter from "../images/icon-twitter.svg";
import iconInstagram from "../images/icon-instagram.svg";
import iconYoutube from "../images/icon-youtube.svg";

const icons = {facebook : iconFacebook, 
    twitter : iconTwitter, 
    instagram : iconInstagram, 
    youtube : iconYoutube};

function getIcon(platform) {
    return icons[platform];
}

export { getIcon };

