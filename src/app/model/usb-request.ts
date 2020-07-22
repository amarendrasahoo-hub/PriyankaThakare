export interface UsbRequest {
    reqNo: string;
    reqSrNo: number;
    processId: string;
    reqBy: string;
    accessType: string;
    accessDate: string;
    noofDays: number;
    reqDate: Date;
    reqTime: string;
    workflowId: string
}

