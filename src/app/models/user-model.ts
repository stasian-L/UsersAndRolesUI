import { RoleModel } from "./role-model";

export class UserModel {
    id?: string;
    name?: string;
    roles?: RoleModel[];

    constructor(init?: Partial<UserModel>) {
        Object.assign(this, init);
    }
}