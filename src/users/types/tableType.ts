interface Column { 
    column_name: string; 
    title: string 
    dt: string 
    dtx: string
    ct: string
    nrqd: boolean
    rqd: boolean
    ck: boolean
    pk: boolean
    un: boolean
    ai: boolean
    cdf: any
    clen: any
    np: number
    ns: number,
    dtxp: string,
    dtxs: any,
    altered: number,
    uidt: string,
    uip: any,
    uicn: any
}
export interface Table {
    title : string;
    table_name : string;
    columns : Column[]
  }
