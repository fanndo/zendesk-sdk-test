
export const config = ()=>({
    zendesk:{
        subdomain:process.env.SUBDOMAIN,
        secret: process.env.SECRET
    },
    user:{
        email:process.env.EMAIL,
        userId:process.env.USERID
    },
    port: process.env.PORT
})