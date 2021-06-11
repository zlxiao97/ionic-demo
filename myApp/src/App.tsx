import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Scale from "./pages/Scale";
import EmploymentRate from "./pages/EmploymentRate";
import Province from "./pages/Province";
import JobChannel from "./pages/JobChannel";
import SalaryLevel from "./pages/SalaryLevel";
import Literacy from "./pages/Literacy";
import Trend from "./pages/Trend";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  return (
    <IonApp id="app">
      <Menu />
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/scale" render={() => <Scale />} />
          <Route exact path="/employment" render={() => <EmploymentRate />} />
          <Route exact path="/province" render={() => <Province />} />
          <Route exact path="/jobChannel" render={() => <JobChannel />} />
          <Route exact path="/salaryLevel" render={() => <SalaryLevel />} />
          <Route exact path="/literacy" render={() => <Literacy />} />
          <Route exact path="/trend" render={() => <Trend />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
