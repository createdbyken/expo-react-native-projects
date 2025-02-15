import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { isChecking, isAuthenticated, loginWithEmailPassword, user, logout } =
    useAuthContext();

  if (isChecking) {
    return <h3>Checking...</h3>;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <h3>Welcome</h3>
          <pre>{JSON.stringify(user, null, 2)}</pre>

          <button
            onClick={() => logout}
            className="bg-blue-500 p-2 text-white rounded-xl mt-2"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h3>Sign in to app</h3>

          <button
            onClick={() => loginWithEmailPassword("sample@gmail.com", "123456")}
            className="bg-blue-500 p-2 text-white rounded-xl mt-2"
          >
            Login
          </button>
        </>
      )}
    </>
  );
};
