import Link from "next/link"
export const metadata={
    title:" About Page",
    description:"About Page of my website",
    authors:[{name:'sakshi'},{name:"sakshibisht"}],
    keywords:['nextjs','reactjs','fullstack','frontend']
}

export default function AboutLayout({children}){
    return(
        <html>
              <body>
                <h1>AboutLayout</h1>
                {children}
                <button><Link href="/">Go Back</Link></button>
        
            
              </body>
            </html>
    )
}