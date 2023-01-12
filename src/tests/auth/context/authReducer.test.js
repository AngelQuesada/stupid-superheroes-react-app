import { authReducer } from "../../../auth/context/authReducer"
import { types } from "../../../auth/types/types"

describe ('Pruebas en context/authReducer', () => {

    const initialState = {
        logged: false,
        user: null
    }

    test('Should return the initial state', () => {

        const newState = authReducer( initialState, {} ) 

        expect(newState).toBe(initialState);
    })

    test('Login function should auth the user and stablish it', () => {

        const loginAction = {
            type: types.login,
            payload: {
                name: 'Angel Quesada',
                id: 'ID1'
            }
        }

        const newState = authReducer( initialState, loginAction ) ;

        expect(newState.logged).toBeTruthy();
        expect(newState.user).toBeTruthy();
        expect(newState.user.name).toBe('Angel Quesada');

    })

    test('Logout function should remove the username and logout the user', () => {

        const logoutAction = {
            type: types.logout
        }

        const logoutState = authReducer( {logged:true}, logoutAction ) ;

        expect(logoutState.logged).toBeFalsy();
    })
})