import { useContext, useEffect } from "react";
import { Footer, Header, Navbar, UsersSection } from "../../components";
import { EntranceContext } from "../context";

import { months } from '../../dataCalendar';
import no_user from '../../assets/user.jpg';
import noImage from '../../assets/no-image.jpg';
import { useDataCompany, useDataUser } from "../../hooks";

export const EntranceDashboard = () => {
    const time = new Date();
    const today = time.getDate() + ' ' + months[time.getMonth()] + ' '  + time.getFullYear();

    const { dataUser } = useDataUser();
    const { dataCompany } = useDataCompany();
    
    useEffect(() => {
      dataUser();  
    }, []);
    
    const { user } = useContext(EntranceContext);
    const { companyName, name, lastname, photo } = user || {};

    useEffect(() => {  
      dataCompany( companyName );
    }, [companyName])
    
    
    return (
      <div className="container">
        <Header />
        <Navbar />
        <section className="data-user-organization">
          {
            ( user ) &&
              (
                <>
                  <UsersSection name={ `${ name } ${ lastname }`} logo={ photo || no_user } linkTo = '/user' />
                  <UsersSection name={ companyName } logo={ noImage } linkTo = '/company' />
                </>
              )
          }
        </section>
        <section className="dayCalendar">
          <p className="today">{ today }</p>
          <div className="bar-day-calendar">
            <p className="total-hours">Total horas día: 8</p>
            <div className="bar-day">
              <div className="bar-checkIn-hours">

              </div>
            </div>
            <div className="time-data">
              <p className="total-hours">Horas trabajadas: 0.6</p>
              <p className="total-hours">
                <span>Hora inicio: 8:00</span>
                <span>Hora salida:</span>
              </p>

            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
}
