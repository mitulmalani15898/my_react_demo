import baseService from './baseService';

export const login = (credentials) => {
    return baseService.post('/login', credentials);
}