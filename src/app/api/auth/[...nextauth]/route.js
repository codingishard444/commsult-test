import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const authHandler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email:{label:"email",type:"text"},
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials){
                try {
                    const {email,password} = credentials
                    if (email === "Demo@example.com" && password === "demopassword"){
                        return {id:1,name:"Demo user"}
                    }
                } catch (e) {
                    return null
                }
            }

        })
    ],
    pages : {
        signIn: '/login'
    }
})
export{authHandler as GET,authHandler as POST}