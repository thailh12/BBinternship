export const getTodos = () => {
    const str = localStorage.getItem('todos');

    //Check empty string.
    if (!str) {
        return [];
    }

    try {
        return JSON.parse(str);
    } catch (error) {
        return [];
    }
};

export const saveTodos = (todos) => {
    const str = JSON.stringify(todos);

    return localStorage.setItem('todos', str);
};