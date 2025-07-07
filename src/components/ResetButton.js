export default function resetButton({dispatch}){
    return (
        <div className="btn btn-ui" onClick={() => dispatch({type: "resetQuiz"})}>Reset</div>
    )
}