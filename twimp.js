data = [{
    "Tools": "true",
    "values": {"PerformInteractiveRead": "false", "ViewJobStatus": "true"}
}, {
    "values": {
        "ModifyHypersproutConfigurations": "false",
        "ModifyHypersproutFirmware": "false",
        "HypersproutFirmwareManagement": "true",
        "HypersproutJobStatus": "false"
    },
    "HypersproutManagement": "false"
}, {
    "MeterManagement": "false",
    "values": {
        "ModifyMeterConfigurations": "false",
        "ModifyMeterFirmware": "false",
        "MeterFirmwareManagement": "true",
        "MeterJobStatus": "false"
    }
}, {
    "Administration": "false",
    "values": {"ModifySecurity": "true", "ModifySystemSettings": "true", "ModifyUsers": "true"}
}, {
    "Reports": "false",
    "values": {
        "CommunicationStatistics": "true",
        "SystemLog": "true",
        "DeviceFirmwareVersions": "true",
        "DeviceRegistrationStatus": "false",
        "NewAccountsReport": "true",
        "SystemAuditLog": "true"
    }
}, {
    "SystemManagement": "false",
    "values": {"DeviceManagement": "true", "JobStatus": "true", "Registration": "true", "Grouping": "true"}
}];
let i,j;
let allowedModules = [];

let juji = [
    {
        a:'ba',
        c:'d'
    }, {
        aa:'bb',
        ca:'d'
    }, {
        ba:'bc',
        bc:'d'
    }
];
// console.log(juji[0].a);
// var obj = { first: 'someVal' };

for(i = 0; i < juji.length; i++) {
     let val = Object.keys(juji[i]);
    juji[i][val[0]] = 'true';
}
// console.log(juji);


// for (i = 0; i < data.length; i++) {
//     for (let property in data[i].values) {
//         if(data[i].values[property] === 'true') {
//             let val = Object.keys(data[i]);
//             data[i][val[0]] = 'true';
//             break;
//         }
//     }
// }

for (let item of data) {
    let key = Object.keys(item)[0] === 'values'?Object.keys(item)[1]:Object.keys(item)[0];
    item[key] = Object.values(item['values']).includes('true');
}
console.log(data);
