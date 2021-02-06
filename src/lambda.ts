
export type ResponseContract = {
    hello: 'world';
}

export async function handler(): Promise<ResponseContract> {
    return {
        hello: 'world'
    };
}
