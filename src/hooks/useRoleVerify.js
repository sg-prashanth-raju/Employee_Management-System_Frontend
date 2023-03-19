import useAuth from "./useAuth";

const useRoleVerify = () => {
    const { auth } = useAuth();
    const roles_mapping = {
        'User': 2001,
        'Editor': 1984,
        'Admin': 5150
    }

    const roleVerify = (Roles) => {
        const arr = Roles.map(key => roles_mapping[key]);
        return auth?.roles?.find(role => arr?.includes(role));
    }

    return [roleVerify];
}

export default useRoleVerify;