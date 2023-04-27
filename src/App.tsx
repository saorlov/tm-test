import AuthForm from "./components/forms/AuthForm";
import SearchForm from "./components/forms/SearchForm";
import SearchContextLayout from "./layouts/SearchContextLayout";

function App() {

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
