/* eslint-disable new-parens */
import axios from "axios";
// import { Observable } from 'rxjs/internal/Observable';
// import { catchError, map } from "rxjs/operators";
// import SYSTEM_CONSTANTS from "../../common/constants";
// import { IDataResponse } from "../../common/define-meetings";
// import { SpecializedOfSchool } from "../../common/define-type";
// import HttpClient from "../http-client";

export default class StatisticApi {
    
    static sendCareerStatistic(re: any) {
        throw new Error("Method not implemented.");
    }
    static host = 'https://api.careerup.inres.ai';

    // static sendAnswers(params: QuestionRequest[]): Observable<IDataResponse<testResponse[]> | null> {
    //     const api = `${StatisticApi.host}/${SYSTEM_CONSTANTS.API.Statistic.SEND_ANSWERS}`;
    //     return HttpClient.post(api,params).pipe(
    //         map((res) => res as IDataResponse<testResponse[]> || null, catchError((error) => new Observable))
    //     );
    // }

    static getAllBinData(): any{
        var config = {
            method: 'GET',
            url: 'http://127.0.0.1:5000/home',
            headers: { }
        };
        return axios(config);
    }

    static getCompartmentDataByBinID(id: string): any{
        
    }

    // static getDataByTimeAndLocation(params: any): any{
    //     var data = `time=${params.time}&location=${params.location}`

    //     var config = {
    //         method: 'post',
    //         url: 'http://127.0.0.1:5000/home',
    //         headers: { 
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         data : data
    //     };
    //     return axios(config);

    // }

    static getCurrentChartData(): any{
		var config = {
			method: 'GET',
			url: 'http://127.0.0.1:5000/home',
			headers: { }
		};
		return axios(config);
    }

	static getPeriodTimeBarChartData(binId: string, startTime: string, endTime: string): any{ // Lay du lieu bieu do cot du lieu rac theo ngay
        var data = `location=${binId}&start_time=${startTime}&end_time=${endTime}`
        console.log(data)
          var config = {
            method: 'post',
            url: 'http://127.0.0.1:5000/home',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
          };

		
		return axios(config);
	} 

    static resetBinById(binId: string, compartmentId: string): any{
        var config = {
            method: 'get',
            url: `http://127.0.0.1:5000/reset/${binId}/${compartmentId}`,
            headers: { }
          };

        return axios(config);
    }

    // static sendAnswers(params: any[]): any{
    //   var config = {
    //     method: 'post',
    //     url: `${StatisticApi.host}/question`,
    //     headers: { 
    //       'Content-Type': 'application/json'
    //     },
    //     data : JSON.stringify(params)
    //   };
    //   return axios(config)
    // }

    

    // static getSpecializedOfSchool(id: string, mark: string, unit_names: string): any {
    //   var config = {
    //     method: 'get',
    //     url: `${StatisticApi.host}/school/search?specialized_id=${id}&mark=${mark}&unit_names=${unit_names}\n`,
    //     headers: { },
    //   };
    //   return axios(config)
    // }

    // static getSpecializedOfSchoolById(specializedOfSchoolId: string): Observable<IDataResponse<SpecializedOfSchool> | null> {
    //     const api = `${StatisticApi.host}/${SYSTEM_CONSTANTS.API.SPECIALIZED_OF_SCHOOL.GET_SPECIALIZED_OF_SCHOOL_BY_ID.replace('{specializedOfSchoolId}', specializedOfSchoolId)}`;
    //     return HttpClient.get(api).pipe(
    //         map((res) => res as IDataResponse<SpecializedOfSchool> || null, catchError((error) => new Observable)));

    // }
    // static getQuestions(): any {
    //     var config = {
    //       method: 'get',
    //       url: `${StatisticApi.host}/question`,
    //       headers: { },
    //     };
    //     axios(config)
    //     .then(function (response) {
    //       console.log(JSON.stringify(response.data));
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
          
    // }

    // static getUnit(): any {
    //     var config = {
    //       method: 'get',
    //       url: `${StatisticApi.host}/unit?limit=149&offset=0`,
    //       headers: { },
    //     };
    //     return axios(config)
    // }

    // static getSpecialized(): any {
    //     var config = {
    //       method: 'get',
    //       url: `${StatisticApi.host}/specialized?limit=1000&offset=0`,
    //       headers: { },
    //     };
    //     return axios(config)
    // }

    // static getSimilarSpecialized(id: string): any {
    //     var config = {
    //       method: 'get',
    //       url: `${StatisticApi.host}/specialized/${id}/similar`,
    //       headers: { },
    //     };
    //     return axios(config)
    // }
    // static getTasksByName(params: String): Observable<IDataResponse<ITask> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.TASK.GET_ALL}?name=${params}`;
    //     return HttpClient.get(api).pipe(
    //         map((res) => res as IDataResponse<ITask> || null, catchError((error) => new Observable)));

    // }
    // static getRoles(): Observable<IDataResponse<ITask> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.ROLE.GET_ALL}`;
    //     return HttpClient.get(api).pipe(
    //         map((res) => res as IDataResponse<ITask> || null, catchError((error) => new Observable)));

    // }

    // static getAdvisor(body: IGetAdvisorReq): Observable<IDataResponse<IAdvisor> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.Advisor.FILTER_Advisor}`;
    //     return HttpClient.post(api, body).pipe(
    //         map((res) => res as IDataResponse<IAdvisor> || null, catchError((error) => new Observable)));

    // }
    // static getAdvisorById(meetingId: string): Observable<IDataResponse<any> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.Advisor.GET_MEETING_BY_ID.replace('{meetingId}', meetingId)}`;
    //     return HttpClient.get(api).pipe(
    //         map((res) => res as IDataResponse<IAdvisor> || null, catchError((error) => new Observable)));
    // }
    // static createAdvisor(body: ICreateAdvisorReq): Observable<IDataResponse<any> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.Advisor.CREATE_Advisor}`;
    //     return HttpClient.post(api, body).pipe(
    //         map((res) => res as IDataResponse<IAdvisor> || null, catchError((error) => new Observable)));
    // }

    // static updateAdvisor(meetingId: string, body: ICreateAdvisorReq): Observable<IDataResponse<any> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.Advisor.UPDATE_Advisor.replace('{meetingId}', meetingId)}`;
    //     return HttpClient.put(api, body).pipe(
    //         map((res) => res as IDataResponse<IAdvisor> || null, catchError((error) => new Observable)));
    // }

    // static deleteAdvisor(meetingId: string): Observable<IDataObjectResponse<any> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.Advisor.DELETE_Advisor.replace('{meetingId}', meetingId)}`;
    //     return HttpClient.delete(api).pipe(
    //         map((res) => res as IDataObjectResponse<IAdvisor> || null, catchError((error) => new Observable)));
    // }

    // static getMembers(body: GetAllMemberReq): Observable<IDataResponse<IMemberInAdvisor> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.MEMBER.GET_ALL}`;
    //     return HttpClient.post(api, body).pipe(
    //         map((res) => res as IDataResponse<IMemberInAdvisor> || null, catchError((error) => new Observable)));
    // }

    // static getAllMembersWithRole(body: GetAllMembersWithRoleReq): Observable<IDataResponse<IMemberWithRole> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.MEMBER.GET_ALL_WITH_ROLE}?offset=${body.offset}&size=${body.size}`;
    //     return HttpClient.get(api).pipe(
    //         map((res) => res as IDataResponse<IMemberWithRole> || null, catchError((error) => new Observable)));
    // }
}