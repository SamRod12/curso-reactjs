import "./TodoLoading.css"
function TodoLoading(){
    return(
        <div className="cube">
            <div className="overlay" id="overlay"></div>
            <div className="loader">
                <div className="loader-cube">
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                </div>
            </div>
        </div>
    );
}
export {TodoLoading}