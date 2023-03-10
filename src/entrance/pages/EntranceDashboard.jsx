import { Footer, Header, Navbar, UsersSection } from "../../components";

import { months } from '../../dataCalendar';
import user from '../../assets/user.jpg';
import noImage from '../../assets/no-image.jpg';

export const EntranceDashboard = () => {
    const time = new Date();
    const today = time.getDate() + ' ' + months[time.getMonth()] + ' '  + time.getFullYear()
    
    return (
      <div className="container">
        <Header />
        <Navbar />
        <section className="data-user-organization">
          <UsersSection name="Nombre Usuario" logo={ user } />
          <UsersSection name="Organización" logo={ noImage }/>
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
