import React, {Component} from "react";

// const Test = () => {
//   return (
//     <div>
//     <h1>HelloWorld</h1>
//     </div>
//   );
// };
// export default Test;

class Test extends Component{
    state ={
        isLoggedIn : false,
    };
    render() {
        return (
            <div>
                {!this.isLoggedIn ? (
                <h1>
                    You are not logged In!
                </h1>):(
                <h1>Congrats, you are logged In</h1>
                )}
                <button
                onClick ={(e) => this.setstate({isLoggedIn : !this.state.isLoggedIn})}>
                   Login
                    </button>
               

            </div>
        )
    }


    
    }




export default Test;