export default function Box() {
  return {
    MuiBox: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "20px",
          alignText: "left",
        },
      },
    },
  };
}
