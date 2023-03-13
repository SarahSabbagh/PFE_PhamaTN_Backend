export default function Box() {
  return {
    MuiBox: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignText: "left",
        },
      },
    },
  };
}
