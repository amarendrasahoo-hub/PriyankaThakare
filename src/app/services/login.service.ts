import { Injectable, EventEmitter } from "@angular/core";
import { Login } from "../model/login";
import { UserProfile } from "../model/user-profile";
import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
import { EmployeeData } from "../model/employee-data";
import { error } from "protractor";
import { Observable } from "rxjs";
import { windowWhen } from "rxjs/operators";
import { Router } from "@angular/router";
import { ReqRaised } from "../model/req-raised";
import { map } from "rxjs/operators";
import { Admin } from "../model/admin";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  $loggedInUserData = new EventEmitter();
  private employee: EmployeeData;
  emp: EmployeeData;
  public errorMessage: string;
  public empObs: Observable<EmployeeData>;
  private jwtToken: string;
  private userid: string;

  constructor(private http: HttpClient, private router: Router) {}

<<<<<<< HEAD
  login(username: string, password: string) {
    const userAuthData: Login = { user: username, pass: password };
    return this.http.post<any>(
      "https://59.145.135.45:3000/activeDir/angular_auth",
      userAuthData
    );
=======
  login(username: string, password: string){
    const userAuthData: Login = {user: username, pass: password};
    return this.http.post<any>('https://59.145.135.45:3000/activeDir/angular_auth', userAuthData);
>>>>>>> fc5b23223b5813bd03f0e4348adf552fd6f52543
  }
  isLoggedin() {
    return !!localStorage.getItem("token");
  }
  logoutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("empData");
    console.log("logout");
    this.router.navigate(["/home"]);
  }
  getToken() {
    return localStorage.getItem("token");
  }
  getAdminData() {
    return this.http
      .get("https://59.145.135.45:3000/admin/display/SS004700")
      .pipe(
        map((resp) => {
          const dataArray = [];
          for (const key in resp) {
            if (resp.hasOwnProperty) {
              dataArray.push({ ...resp[key], id: key });
            }
          }
          //console.log("dataArray in service", dataArray);
          return dataArray;
        })
      )
  }
  getAdminDataSource(): Observable<Admin[]> {
    return this.http.get<Admin[]>(
      "http://59.145.135.45:3000/admin/display/SS004700"
    );
  }
  heroesUrl = "http://59.145.135.45:3000/admin/display/SS004700";
  /** GET heroes from the server */
  getHeroes(): Observable<[]> {
    return this.http.get<[]>(this.heroesUrl);
  }

  getAuthentication(user: Login) {
    this.http
      .post<EmployeeData>(
        "http://10.20.33.79:3000/activeDir/angular_auth",
        user
      )
      .subscribe((resposedata: EmployeeData) => {
        this.employee = resposedata;
        this.emp = resposedata;
        this.$loggedInUserData.emit(this.emp);
      });
  }

  getUserProfile(user: Login) {
    return this.http.post<EmployeeData>(
      "http://10.20.11.46:3000/angular_auth",
      user
    );

    // .subscribe(data => {
    //   this.employee = data;
    // })
  }

  setUserId(eccode) {
    this.userid = eccode;
  }
  getUserId() {
    return this.userid;
  }

  getUser() {
    return this.employee;
  }
  getUserName() {
    return this.employee.Name;
  }

  userAuthenticationObs(user: Login): Observable<EmployeeData> {
    return this.http.post<EmployeeData>(
      "http://10.20.11.46:3000/angular_auth",
      user
    );

    //       .subscribe(( empdata: EmployeeData) => {
    //         this.employee = empdata;
    // //        window.alert("inside success");
    //         this.errorMessage = 'success';
    //         console.log(this.employee);
    //         //return this.errorMessage;

    //         },
    //         (error:any) => {
    //           this.errorMessage = error;
    //           window.alert("inside error");
    //           console.log(error);
    //           //return this.errorMessage;
    //         });
    //         //console.log("message in service" + this.errorMessage);
  }
}
