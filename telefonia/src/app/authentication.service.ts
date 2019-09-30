import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable, of} from 'rxjs'
import {map} from 'rxjs/operators'
import {Router} from '@angular/router'

export  interface UserDetails {
    perNombre: string
    perApellido: string
    perTelefonoFijo: string
    perFechaDeNacimiento: string
    perCedula: string
    linumerolinea: string
    linestado: string
    equSerial: string
    liNumeroLinea: string
    equMarca: string
    equDescripcion: string
    equEstado: string
    exp:number
    iat:number
}

interface TokenResponse {
    token: string
}

export interface TokenPayload {
    perNombre: string
    perApellido: string
    perTelefonoFijo: string
    perFechaDeNacimiento: string
    perCedula: string
    linumerolinea: string
    linestado: string
    equSerial: string
    liNumeroLinea: string
    equMarca: string
    equDescripcion: string
    equEstado: string
}

@Injectable()
export class AuthenticationService {
    private token : string

    constructor(private http: HttpClient, private router : Router) {}

    private saveToken(token: string) : void {
        localStorage.setItem('usertoken', token)
        this.token = token
    }

    private getToken() : string {
        if(!this.token){
            this.token = localStorage.getItem('usertoken')
        }
        return this.token
    }

    public getUserDetails(): UserDetails {
        const token = this.getToken()
        let payload
        if(token) {
            payload = token.split('.')[1]
            payload = window.atob(payload)
            return JSON.parse(payload)
        }
        else{
            return null
        }
    }

    public register(user: TokenPayload): Observable<any>{
        return this.http.post('/users/register', user)
    }

    

    
}