export interface AssetRequest{
    reqNo: string;
    reqBy: string;
    reqRetflag : string;
    processId: string;
    assetType: string;
    quantity: number;
    reason: string;
    reqDate: Date;
    reqTime: string;
    workflowId: string
    }