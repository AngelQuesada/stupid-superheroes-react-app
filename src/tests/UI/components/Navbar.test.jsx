import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../auth/context/AuthContext"
import { Navbar } from "../../../UI/components/Navbar"

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Test in <NavBar />', () => {

    const loggedContextValue = {
        logged: true,
        user: {
            id: 'abc',
            name: 'Angel'
        },
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() );

    test('Should show the person name that is logged', () => {
        render(
            <AuthContext.Provider value={loggedContextValue}>
                <MemoryRouter>
                    <Navbar ></Navbar>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.findByText('Angel') ).toBeTruthy();
    })

    test('Should call logout when logout button is clicked', () => {
        render(
            <AuthContext.Provider value={loggedContextValue}>
                <MemoryRouter>
                    <Navbar ></Navbar>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutButton = screen.getByRole('button');

        fireEvent.click( logoutButton );

        expect( loggedContextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {'replace':true})
    })

    // test('Should call logout', () => {
      
    // })
    
})