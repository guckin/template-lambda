
export type ResponseContract = {
    hello: 'world';
}

export function handler(): ResponseContract {
    console.log('Hello World');
    return {
        hello: 'world'
    };
}
