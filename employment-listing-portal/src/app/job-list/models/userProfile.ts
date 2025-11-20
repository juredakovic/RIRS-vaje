export type userProfile = {
    fullName : string,
    email : string,
    phoneNumber : string,
    region : string,
    city : string,
    socialMedia : SocialMediaLinks
}

export type SocialMediaLinks = {
    linkedin : string,
    twitter : string,
    facebook : string,
    dribble : string
}