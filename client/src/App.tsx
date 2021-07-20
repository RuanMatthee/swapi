import { observer } from "mobx-react";
import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { peopleContext } from "./store/PeopleStore";
import { Loading } from "./components/Loading";
import { Pagination } from "semantic-ui-react";
import { useEffect } from "react";
import { Details } from "./components/Details";
import { PeopleList } from "./components/PeopleList";
import { Header } from "./components/Header";

export const App: React.FC = observer(() => {
  const peopleStore = useContext(peopleContext);
  const [activePage, setactivePage] = useState<string>("1"); // Spice it up with a hook

  useEffect(() => {
    peopleStore.getPeople();
  }, [peopleStore]);

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/details">
            <Details />
          </Route>

          <Route path="/">
            <div className="grid justify-items-center grid-cols-1">
              {!peopleStore.loading && (
                <>
                  <PeopleList />
                  <Pagination
                    activePage={activePage}
                    onPageChange={(e, { activePage }) => {
                      setactivePage(`${activePage}`);
                      peopleStore.getPeople(`${activePage}`);
                    }}
                    totalPages={peopleStore.pages}
                    ellipsisItem={null}
                  />
                </>
              )}
              {peopleStore.loading && <Loading />}
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
});
