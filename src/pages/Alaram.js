const Alaram = () => {
    const timeToFirst = "6 hours 45 minutes";
    const dateOfFirrst = 5;
    return (
        <div className="container text-center pt-5">
            <h5>Upcomung alaram</h5>
            <h2 className="text-white">{timeToFirst}</h2>
            <h5 className="text-yellow">{dateOfFirrst}</h5>

        </div>
    );
}

export default Alaram;