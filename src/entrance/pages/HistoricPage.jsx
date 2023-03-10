import { Footer, Header, Navbar, TotalTimeBar, CounterDate, TotalTime, DifferenceTime } from '../../components';

export const HistoricPage = () => {

    const date = new Date();
    const year = date.getFullYear();
    const numberOfMonth= date.getMonth();
    
    return (
        <div className="container">
            <Header />
            <Navbar />
            <section className="totalTimeByYear">
                <CounterDate date={ year } />
                <TotalTime time="125" />
                <DifferenceTime time={ 2 } />
            </section>
            <section className="totalTimeByMonth">
                <CounterDate numberOfMonth={ numberOfMonth } />
                <TotalTime time="50" />
                <DifferenceTime time={ -1 } />
            </section>
            <section className="totalTimeByDays">
                <TotalTimeBar />
                <DifferenceTime time={ 0 } />
            </section>
            <Footer />
        </div>
    )
}
