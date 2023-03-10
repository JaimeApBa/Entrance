import { 
  Footer,
  Header,
  Calendar,
  LegendCalendar,
  Navbar,
  UserHolidaysSection 
} from '../../components';

export const CalendarPage = () => {
  return (
    <div className="container">
        <Header />
        <Navbar />
        <section className="user-holidays">
          <UserHolidaysSection totalDaysOfHolydays={ 20 } daysOfHolidaysLeft = { 18 } />
        </section>
        <section className="bt-holidaysWrap">
          <button className='bt-holidays'>Solicitar Vacaciones</button>
        </section>
        <section className="holidays-calendar">
          <LegendCalendar />
          <Calendar />
        </section>
        <Footer />
      </div>
  )
}
