import {
    CssBaseline,
    //   PaletteMode,
    ThemeProvider,
    createTheme,
} from "@mui/material";

import { useMemo } from "react";

interface MuiDefProps {
    children: React.ReactNode
}

const MuiDef = (props: MuiDefProps) => {
    const { children } = props
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    background: {
                        default: "#e2f2f2",
                    },
                },
                direction: "rtl",
                components: {
                    MuiSelect: {
                        defaultProps: {
                            size: "small",
                        },
                    },
                    MuiButton: { defaultProps: { sx: { background: "gray", color: "black", }, }, },
                    MuiAppBar: { defaultProps: { sx: { alignContent: "center", height: "10%" } } },
                    MuiTextField: {
                        defaultProps: {
                            size: "small",

                        },
                        styleOverrides: {
                            root: {
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderRadius: 50,
                                        borderColor: "red solid",
                                    },
                                }
                            }
                        },

                    },
                },

            }),
        []
    );
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
            style={{
                height: "100vh",
                width: "100vw",
                maxWidth: "100%",
            }}
        >
            {children}
        </div>
    </ThemeProvider>
}
export default MuiDef