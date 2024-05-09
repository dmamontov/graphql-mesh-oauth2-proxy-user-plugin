import { stringInterpolator } from '@graphql-mesh/string-interpolation';

export const evaluate = (value?: any): any => {
    if (typeof value === 'string') {
        const result = stringInterpolator.parse(value, { env: process.env });

        if (result === '') {
            return undefined;
        } else if (result === 'null') {
            return null;
        } else if (result === 'true' || result === 'false') {
            return result === 'true';
        } else if (!isNaN(Number(result))) {
            return Number(result);
        }

        return result;
    }

    return value;
};
