import { types } from "../../../auth/types/types"

describe('Tests in types.js', () => {

    test('Should return a concrete structure ', () => {
        
        expect(types.login).toBeTruthy();
        expect(types.logout).toBeTruthy();
        expect(types.login).toBe('[Auth] Login');
        expect(types.logout).toBe('[Auth] Logout');

    })
    
})