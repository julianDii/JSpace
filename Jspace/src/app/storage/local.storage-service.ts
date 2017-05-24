import { Injectable } from "@angular/core";

Injectable()
export class LocalStorageService {

    private static instance: LocalStorageService;

    constructor() {
        if (LocalStorageService.instance) {
            throw new Error("Error - use Singleton.getInstance()");
        }
        LocalStorageService.instance = this;

    }

    static getInstance(): LocalStorageService {
        LocalStorageService.instance = LocalStorageService.instance || new LocalStorageService();
        return LocalStorageService.instance;
    }

    saveToLocalStorage(key: string, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    readLocalStorage(type:string) {
       return localStorage.getItem(type);
    }

    saveNameWithTaskNumber(name, task) {
        localStorage.setItem(name, task);
        let data = localStorage.getItem(name)
        console.log(data)

    }

    getNameWithTaskNumber() {
        let data = localStorage.getItem('name');
        return data;
    }

}