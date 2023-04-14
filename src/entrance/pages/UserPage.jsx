import { BackHistory, Footer, Header, Navbar, UserCard } from "../../components"

export const UserPage = ( id ) => {
  return (
    <div className="container">
        <Header />
        <Navbar />
        <BackHistory />
        <UserCard />
        <Footer />
          
      </div>
  )
}
