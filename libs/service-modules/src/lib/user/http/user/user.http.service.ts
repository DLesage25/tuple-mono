import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios, { Axios } from 'axios';

const addInterceptors = (instance: Axios) => {
    instance.interceptors.request.use((req) => {
        // console.log(`${req.baseURL}/${req.url}`);
        // console.log({ params: req.params });
        return req;
    });
};

@Injectable()
export class UserHttpService extends HttpService {
    constructor() {
        const instance = axios.create({
            baseURL: `${process.env.USER_SERVICE_BASE_URL}`,
        });

        addInterceptors(instance);
        super(instance);
    }
}
