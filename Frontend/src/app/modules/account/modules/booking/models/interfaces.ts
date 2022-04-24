export interface IBookingData {
    id?: number;
    deviceId: number;
    start: Date;
    end: Date;
    comment: string;
}

export interface IAddDeviceData {
    name: string,
    year: number,
    description: string
}

export interface IBookDeviceData {
    id: number,
    start: string,
    end: string,
    comment: string
}

export interface IBookDeviceResponse {
    id: number
    deviceId: number,
    start: string,
    end: string,
    comment: string
}