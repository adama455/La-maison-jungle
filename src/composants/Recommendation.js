function Recommendation(){
    const currentMonth = new Date().getMonth()
    const isprintemps = currentMonth >= 2 && currentMonth <=5

    if(!isprintemps) {
        return <idv> C'est n'est pas le moment de rempotez !</idv>
    }
    return <idv> C'est le printemps, rempotez !</idv>

}
export default Recommendation