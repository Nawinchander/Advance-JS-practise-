const getdeliveries={
    message: "Searched Deliveries",
    data: [
        {
            deliveryId: "658d6567f27070671c06bbc2",
            createdAt: 1703063040, // in epoch
            retailer: "658c23e0deed1772089b1c4b",
            deliveryCost: 120,
            bottles: [
                {
                    bottleId: "658c667b0bfe2f8dd833dd17",
                    campaign: "658c12e3fc57b43304275dd7",
                    totalScans:10
                },
                {
                    bottleId: "658c95560eeb458e2c379195",
                    campaign: "658c12e3fc57b43304275dd7",
                    totalScans:15
                },
                {
                    bottleId: "658c667b0bfe2f8dd833dd17",
                    campaign: "45dd45jdac57b4330s443dfs",
                    totalScans:10
                },
            ]
        },
        {
            deliveryId: "fa3h434h34hwdahs3h23243h",
            createdAt: 1703063040, // in epoch
            retailer: "658c23e0deed1772089b1c4b",
            deliveryCost: 120,
            bottles: [
                {
                    bottleId: "fwrgsdf432rerf23f43t635f",
                    campaign: "658c12e3fc57b43304275dd7",
                    totalScans:18
                },
                {
                    bottleId: "sdd3dwerw423dfs5453fs545",
                    campaign: "658c12e3fc57b43304275dd7",
                    totalScans:15
                },
                {
                    bottleId: "32423rasd34t3f34twef34tw",
                    campaign: "45dd45jdac57b4330s443dfs",
                    totalScans:10
                },
            ]
        },
        {
            deliveryId: "sdada32fsd54eddfsfs43dg4",
            createdAt: 1703063040, // in epoch
            retailer: "dayreihcaiuro43ouda545jr",
            deliveryCost: 120,
            bottles: [
                {
                    bottleId: "dar3wsdfat434wghr4jk64eff",
                    campaign: "asfwsdg53y5egfg45645gey45",
                    totalScans:10
                },
                {
                    bottleId: "23r2fwefewsdf24t3ggsdv42t",
                    campaign: "658c12e3fc57b43304275dd7",
                    totalScans:20
                },
                {
                    bottleId: "agsdg42t24v4g4eag43f34t3",
                    campaign: "45dd45jdac57b4330s443dfs",
                    totalScans:24
                },
            ]
        },
        {
            deliveryId: "dawdq23dasf53hgetnbavsdgwt3",
            createdAt: 1703063040, // in epoch
            retailer: "658c23e0deed1772089b1c4b",
            deliveryCost: 120,
            bottles: [
                {
                    bottleId: "sdasdq32rdewrf234fwfw4fgr",
                    campaign: "658c12e3fc57b43304275dd7",
                    totalScans:10
                },
                {
                    bottleId: "bett42gw2t42gbgtjtqrgwF3",
                    campaign: "658c12e3fc57b43304275dd7",
                    totalScans:15
                },
                {
                    bottleId: "betn3g24wf4rt324g3g35h4j",
                    campaign: "45dd45jdac57b4330s443dfs",
                    totalScans:10
                },
            ]
        }
    ]
}

const retailerData=[
    {
        id:"658c23e0deed1772089b1c4b",
        name:"cool juice shop",
        pincode:"560047"
    },
    {
        id:"dayreihcaiuro43ouda545jr",
        name:"shivraj condiments",
        pincode:"560017"
    },
    {
        id:"dafq3rfdafwdf34fsdfsrst3",
        name:"chai point",
        pincode:"560019"
    }
]



const FilterFrom={
    campaign:"658c12e3fc57b43304275dd7",// filter data for only this campaign
}

//EXPECTED RESULTS- grouped into retailers using getdeliveries data and retailer data.
// const results=[
//      {
//       id:"658c23e0deed1772089b1c4b",
//       name: 'cool juice shop',
//       pincode: '560047',
//       deliveries: [658d6567f27070671c06bbc2,...],
//       bottles: [
//         '658c667b0bfe2f8dd833dd17',
//         '658c95560eeb458e2c379195',
//        //more such bottles
//       ],
//       bottlecount: ?,
//       totalscans: ?
//     },
//     {
//       id:"dayreihcaiuro43ouda545jr" 
//       name: 'shivraj condiments',
//       pincode: '560017',
//       deliveries: ["sdada32fsd54eddfsfs43dg4"],
//       bottles: [ ? ],
//       bottlecount: ?,
//       totalscans: ?
//     }
//   ]

// write solution code
let result = {}
getdeliveries.data.map(delivery=>{
    if(!result.hasOwnProperty(delivery.retailer)){
        result[delivery.retailer]={name:'',pincode:"",deliveries:[],bottles:[],bottlecount:0,totalScans:0}
            }
            delivery.bottles.map
})
console.log(getdeliveries)


