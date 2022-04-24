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