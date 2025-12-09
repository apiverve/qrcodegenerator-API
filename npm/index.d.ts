declare module '@apiverve/qrcodegenerator' {
  export interface qrcodegeneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface qrcodegeneratorResponse {
    status: string;
    error: string | null;
    data: QRCodeGeneratorData;
    code?: number;
  }


  interface QRCodeGeneratorData {
      id:          string;
      format:      string;
      type:        string;
      correction:  string;
      size:        number;
      margin:      number;
      expires:     number;
      downloadURL: string;
  }

  export default class qrcodegeneratorWrapper {
    constructor(options: qrcodegeneratorOptions);

    execute(callback: (error: any, data: qrcodegeneratorResponse | null) => void): Promise<qrcodegeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: qrcodegeneratorResponse | null) => void): Promise<qrcodegeneratorResponse>;
    execute(query?: Record<string, any>): Promise<qrcodegeneratorResponse>;
  }
}
