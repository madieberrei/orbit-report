export class Satellite {
    // 1.4 add properties to the Satellite class
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    
    // 1.5 add a constructor to Satellite class
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name= name,
        this.type= type,
        this.launchDate= launchDate,
        this.orbitType= orbitType,
        this.operational= operational
    };
        // 6.1 Add a shouldShowWarning method
        shouldShowWarning(){
            if (this.type.toLowerCase() === "space debris"){
                return true;
            } else {
                return false;
            }
        }
    };