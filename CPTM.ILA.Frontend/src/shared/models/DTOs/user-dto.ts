import { emptyGroup, Group } from "../access-control/group.model";

export interface UserDto {
    id: number;
    username: string;
    isComite: boolean;
    isDPO: boolean;
    isSystem: boolean;
    originGroup: Group;
    groups: Group[];
    groupAccessExpirationDate: Date;
    nome: string;
}

export const emptyUserDto = (): UserDto => {
    return {
        id: 0,
        username: "",
        isComite: false,
        isDPO: false,
        isSystem: false,
        originGroup: emptyGroup(),
        groups: [],
        groupAccessExpirationDate: new Date(),
        nome: "",
    };
};
