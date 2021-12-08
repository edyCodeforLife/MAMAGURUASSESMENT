import axios from 'axios';

export const DataService = axios.create({ baseURL: "http://falcon-dev.ap-southeast-1.elasticbeanstalk.com/api" });