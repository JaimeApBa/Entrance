import { CompanySection, CompanyData, Footer, Header, Navbar, CompanyUsers } from "../../components";

export const CompanyPage = () => {

    return (
      <div className="container">
          <Header />
          <Navbar />
          <CompanySection />
          <CompanyData />
          <CompanyUsers />
          <Footer />
          
      </div>
    )
}
