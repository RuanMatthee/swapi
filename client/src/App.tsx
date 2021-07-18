import { observer } from "mobx-react";
import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PeopleContext } from "./store/PeopleStore";
import { Loading } from "./components/Loading";
import { Pagination } from "semantic-ui-react";
import { useEffect } from "react";

export const App: React.FC = observer(() => {
  const peopleStore = useContext(PeopleContext);
  const [activePage, setactivePage] = useState<string>("1")

  useEffect(() => {
    peopleStore.getPeople();
  }, [peopleStore]);

  if (peopleStore.loading) return <Loading />;
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              {/* <Link onClick={() => console.log("click!")} to="/what">
                what
              </Link> */}
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            {peopleStore.people.map((person) => {
              return <h1>{person.name}</h1>;
            })}
            <Pagination
              activePage={activePage}
              onPageChange={(e, {activePage}) => {
                setactivePage(`${activePage}`);
                peopleStore.getPeople(`${activePage}`);
              }}
              totalPages={peopleStore.pages}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
});
