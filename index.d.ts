declare module '@apiverve/qrcodegenerator' {
  export interface qrcodegeneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface qrcodegeneratorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class qrcodegeneratorWrapper {
    constructor(options: qrcodegeneratorOptions);

    execute(callback: (error: any, data: qrcodegeneratorResponse | null) => void): Promise<qrcodegeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: qrcodegeneratorResponse | null) => void): Promise<qrcodegeneratorResponse>;
    execute(query?: Record<string, any>): Promise<qrcodegeneratorResponse>;
  }
}
