export const allRoles = {
    MAIN_ADMIN: true,
    COMPANY: true,
    MAIN_CONTRACTOR: true,
    SUB_CONTRACTOR: true,
    EPC: true,
    USER: true,
} as const;

export type AllRoles = keyof typeof allRoles;
