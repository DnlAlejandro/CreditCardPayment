import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'

export const AppTheme = ({children}) => {
    return (
        <ThemeProvider>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}
