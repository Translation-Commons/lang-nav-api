import app from "./app";

const port = parseInt(process.env.PORT || "3001");

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
