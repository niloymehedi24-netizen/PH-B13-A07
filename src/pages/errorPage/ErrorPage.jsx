const ErrorPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.code}>404</h1>
        <h2 style={styles.title}>Page Not Found</h2>
        <p style={styles.text}>
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        <button
          style={styles.button}
          onClick={() => (window.location.href = "/")}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    maxWidth: "400px",
    width: "90%",
  },
  code: {
    fontSize: "80px",
    margin: "0",
    color: "#764ba2",
  },
  title: {
    margin: "10px 0",
    fontSize: "24px",
  },
  text: {
    color: "#666",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    background: "#667eea",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.3s",
  },
};

export default ErrorPage;
