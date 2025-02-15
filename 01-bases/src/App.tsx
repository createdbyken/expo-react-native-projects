// import { BasicFunctions } from "./typescript/BasicFunctions";
// import { BasicTypes } from "./typescript/basicTypes";
// import { ObjectLiterals } from "./typescript/ObjectLiterals";
// import { LoginPage } from "./components/LoginPage";
// import { UsersPage } from "./components/UsersPage";
import { FormsPage } from "./components/FormsPage";
import { AuthProvider } from "./context/AuthContext";

// import { Counter } from "./components/Counter";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-4xl mb-5 ">React + TS</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectLiterals /> */}
        {/* <BasicFunctions /> */}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        {/* <UsersPage /> */}
        <FormsPage />
      </div>
    </AuthProvider>
  );
}

export default App;
