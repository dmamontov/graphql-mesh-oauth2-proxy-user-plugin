# Oauth2 Proxy User Plugin for GraphQL Mesh

Oauth2 Proxy User Plugin for GraphQL Mesh, based on [@envelop/generic-auth](https://www.npmjs.com/package/@envelop/generic-auth), is a plugin for GraphQL Mesh designed to handle tokens added via OAuth2 Proxy. This plugin ensures security by disallowing GraphQL queries without authentication through OAuth2 Proxy and adds user information extracted from the token into the GraphQL context.

## Installation

Before you can use the Oauth2 Proxy User Plugin, you need to install it along with GraphQL Mesh if you haven't already done so. You can install these using npm or yarn.

```bash
npm install @dmamontov/graphql-mesh-oauth2-proxy-user-plugin
```

or

```bash
yarn add @dmamontov/graphql-mesh-oauth2-proxy-user-plugin
```

## Configuration

### Modifying tsconfig.json

To make TypeScript recognize the Oauth2 Proxy User Plugin, you need to add an alias in your tsconfig.json.

Add the following paths configuration under the compilerOptions in your tsconfig.json file:

```json
{
  "compilerOptions": {
    "paths": {
       "oauth2-proxy-user": ["node_modules/@dmamontov/graphql-mesh-oauth2-proxy-user-plugin"]
    }
  }
}
```

### Adding the Plugin to GraphQL Mesh

You need to include the Oauth2 Proxy User Plugin in your GraphQL Mesh configuration file (usually .meshrc.yaml). Below is an example configuration that demonstrates how to use this plugin:

```yaml
plugins:
  - oauth2ProxyUser:
      enabled: true
      headerKey: 'X-Auth-Request-Access-Token'
      idKey: email
      nameKey: name
      rolesKey: role
```

## Conclusion

Remember, always test your configurations in a development environment before applying them in production to ensure that everything works as expected.