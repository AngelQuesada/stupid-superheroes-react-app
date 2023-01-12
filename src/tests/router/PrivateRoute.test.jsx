import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../auth/context/AuthContext"
import { PrivateRoute } from "../../router/PrivateRoute"

describe('Tests in <PrivateRoute />', () => {

    test('should show children if the user is logged', () => {

        Storage.prototype.setItem = jest.fn();
        
        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Angel'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/batman']}>
                    <PrivateRoute >
                        <h1>Private Route</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Private Route')).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/batman");
    })
    
})