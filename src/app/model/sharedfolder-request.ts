export interface SharedfolderRequest {
    reqNo: string;
    reqSrNo: number;
    processId: string;
    reqBy: string;
    useBy: string;
    userAd: string;
    accessType: string;
    folder_name: string;
    reason: string;
    reqDate: Date;
    reqTime: string;
    workflowId: string
}
