import { AuthenticationError } from 'apollo-server-errors';
import { jwtDecode } from 'jwt-decode';
import { useGenericAuth, type ResolveUserFn, type ValidateUserFn } from '@envelop/generic-auth';
import { type MeshPlugin, type MeshPluginOptions } from '@graphql-mesh/types';
import { type Oauth2ProxyUser, type Oauth2ProxyUserConfig } from './types';
import { evaluate } from './utils';

export default function useOauth2ProxyUser(
    options: MeshPluginOptions<Oauth2ProxyUserConfig>,
): MeshPlugin<any> {
    return {
        onPluginInit({ addPlugin }) {
            addPlugin(
                useGenericAuth({
                    resolveUserFn: resolveUserFn(options),
                    validateUser: validateUser(options),
                    mode: 'protect-all',
                }),
            );
        },
    };
}

const resolveUserFn = (
    options: MeshPluginOptions<Oauth2ProxyUserConfig>,
): ResolveUserFn<Oauth2ProxyUser | undefined> => {
    return (context): Oauth2ProxyUser | undefined => {
        const headerKey = evaluate(options.headerKey).toString().toLowerCase();

        if (!Object.keys(context?.headers || {}).includes(headerKey)) {
            return undefined;
        }

        let token: Record<string, any>;
        try {
            // @ts-expect-error
            token = jwtDecode(context.headers[headerKey]);
        } catch (err) {
            options.logger.error(err);

            return undefined;
        }

        const idKey = evaluate(options.idKey).toString();
        const rolesKey = evaluate(options.rolesKey).toString();
        const nameKey = evaluate(options.nameKey).toString();

        let name: string | undefined;

        if (Object.keys(token).includes(nameKey)) {
            name = token[nameKey];
        } else if (options.defaultName) {
            name = options.defaultName;
        }

        if (
            !Object.keys(token).includes(idKey) ||
            !name ||
            !Object.keys(token).includes(rolesKey)
        ) {
            return undefined;
        }

        return {
            id: token[idKey],
            name,
            roles: token[rolesKey],
            properties: token,
        } as Oauth2ProxyUser;
    };
};

const validateUser = (
    options: MeshPluginOptions<Oauth2ProxyUserConfig>,
): ValidateUserFn<Oauth2ProxyUser> => {
    return params => {
        if (!evaluate(options.enabled)) {
            return;
        }

        if (!params?.user) {
            throw new AuthenticationError('Unauthenticated.');
        }
    };
};
