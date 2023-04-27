import AuthForm from "./components/forms/AuthForm";
import SearchForm from "./components/forms/SearchForm";
import SearchContextLayout from "./layouts/SearchContextLayout";
import {useContext} from "react";
import {SearchContext} from "./context/contexts";

function App() {

    const ctx = useContext(SearchContext)


    return (
        <SearchContextLayout>
          <div
              className={'container'}
          >
              <AuthForm />
              <SearchForm />
          </div>
        </SearchContextLayout>
    )
}

export default App
