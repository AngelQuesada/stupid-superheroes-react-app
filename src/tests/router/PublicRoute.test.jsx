import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../auth/context/AuthContext"
import { PublicRoute } from "../../router/PublicRoute"

describe('Tests in <PublicRoute />', () => {

    test('should show children if the user is not logged', () => {
        
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute >
                    <h1>Public Route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Public Route')).toBeTruthy();
    })
    
})