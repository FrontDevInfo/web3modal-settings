import React, {Component} from "react";
import './index.scss';

const ErrorComponent = () => {

    const onClick = () => {
        window.history.back();
        setTimeout(() => {
            window.location.reload();
        }, 400)
    }

    return (
        <div className="error_boundry">
            <p className="title"> Упс! Что-то пошло не так...</p>

            <div className="flex  flex--align-items-end">
                
                <button className="btn  btn--blue" type="button" onClick={onClick}>Вернуться назад</button> 
                <a className="btn" href="/">Вернуться на главную</a> 
            </div>        
        </div>
    )
}

export default class ErrorBoundry extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    // componentDidCatch(error, info) {
    //   // You can also log the error to an error reporting service
    //   logErrorToMyService(error, info);
    // }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <ErrorComponent/>
      }
      return this.props.children;
    }
  }