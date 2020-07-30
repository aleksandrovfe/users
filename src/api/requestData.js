export const getUsers = async() => {
    const url = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';
    const response= await fetch(url);
    return await response.json();
};