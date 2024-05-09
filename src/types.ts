export interface Oauth2ProxyUserConfig {
    enabled: boolean | string;
    headerKey: string;
    idKey: string;
    nameKey: string;
    rolesKey: string;
}

export interface Oauth2ProxyUser {
    id: string;
    name: string;
    roles: string[];
    properties: Record<string, any>;
}
