export interface HttpResponse<T> {
    content(content: any): unknown;
    code: string;
    data: T;
    meta?: {
        totalItems?: number;
        [key: string]: any; 
    };
    success: boolean;
    statusCode: number;
    searchResultFound?: boolean;
    message: string;
}

export type LoginResponseType = {
    data: {
        user: any,
        token: string
    }
}
