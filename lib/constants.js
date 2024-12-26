export const brandsData = [
  {
    brandName: "Bajaj",
    salesDetails: {
      totalSales: "₹450 Cr",
      regions: ["India"],
      topProduct: "Bajaj Pulsar 150",
      growthRate: "15% YoY",
      quarterWise: [
        { quarter: "Q1", sales: "₹110 Cr" },
        { quarter: "Q2", sales: "₹120 Cr" },
        { quarter: "Q3", sales: "₹115 Cr" },
        { quarter: "Q4", sales: "₹105 Cr" },
      ],
    },
    inventoryReport: {
      totalStock: 12000,
      warehouses: ["Mumbai", "Chennai", "Delhi"],
      damagedUnits: 450,
      lastAudit: "2024-11-10",
    },
    operationalExpenses: {
      annual: "₹180 Cr",
      marketing: "₹40 Cr",
      RnD: "₹60 Cr",
      logistics: "₹80 Cr",
    },
    targetsAndAchieved: {
      annualTarget: "₹500 Cr",
      achieved: "₹450 Cr",
      quarterWise: [
        { quarter: "Q1", target: "₹125 Cr", achieved: "₹110 Cr" },
        { quarter: "Q2", target: "₹125 Cr", achieved: "₹120 Cr" },
        { quarter: "Q3", target: "₹125 Cr", achieved: "₹115 Cr" },
        { quarter: "Q4", target: "₹125 Cr", achieved: "₹105 Cr" },
      ],
    },
    headOfBrand: "Rajesh Sharma",
  },
  {
    brandName: "Triumph",
    salesDetails: {
      totalSales: "₹300 Cr",
      regions: ["India"],
      topProduct: "Triumph Bonneville",
      growthRate: "10% YoY",
      quarterWise: [
        { quarter: "Q1", sales: "₹85 Cr" },
        { quarter: "Q2", sales: "₹75 Cr" },
        { quarter: "Q3", sales: "₹70 Cr" },
        { quarter: "Q4", sales: "₹70 Cr" },
      ],
    },
    inventoryReport: {
      totalStock: 8000,
      warehouses: ["London", "Pune", "Hyderabad"],
      damagedUnits: 200,
      lastAudit: "2024-12-01",
    },
    operationalExpenses: {
      annual: "₹130 Cr",
      marketing: "₹30 Cr",
      RnD: "₹40 Cr",
      logistics: "₹60 Cr",
    },
    targetsAndAchieved: {
      annualTarget: "₹350 Cr",
      achieved: "₹300 Cr",
      quarterWise: [
        { quarter: "Q1", target: "₹90 Cr", achieved: "₹85 Cr" },
        { quarter: "Q2", target: "₹90 Cr", achieved: "₹75 Cr" },
        { quarter: "Q3", target: "₹85 Cr", achieved: "₹70 Cr" },
        { quarter: "Q4", target: "₹85 Cr", achieved: "₹70 Cr" },
      ],
    },
    headOfBrand: "Samantha Williams",
  },
  {
    brandName: "Vespa",
    salesDetails: {
      totalSales: "₹210 Cr",
      quarterWise: [
        { quarter: "Q1", sales: "₹50 Cr" },
        { quarter: "Q2", sales: "₹60 Cr" },
        { quarter: "Q3", sales: "₹45 Cr" },
        { quarter: "Q4", sales: "₹55 Cr" },
      ],
    },
    inventoryReport: {
      totalStock: 6000,
      warehouses: ["Jaipur", "Bangalore", "Noida"],
      damagedUnits: 120,
      lastAudit: "2024-10-25",
    },
    operationalExpenses: {
      annual: "₹80 Cr",
      marketing: "₹25 Cr",
      RnD: "₹25 Cr",
      logistics: "₹30 Cr",
    },
    targetsAndAchieved: {
      annualTarget: "₹250 Cr",
      achieved: "₹200 Cr",
      quarterWise: [
        { quarter: "Q1", target: "₹65 Cr", achieved: "₹55 Cr" },
        { quarter: "Q2", target: "₹65 Cr", achieved: "₹50 Cr" },
        { quarter: "Q3", target: "₹60 Cr", achieved: "₹45 Cr" },
        { quarter: "Q4", target: "₹60 Cr", achieved: "₹50 Cr" },
      ],
    },
    headOfBrand: "Giovanni Rossi",
  },
  {
    brandName: "Tata",
    salesDetails: {
      totalSales: "₹1500 Cr",
      regions: ["India"],
      topProduct: "Tata Nexon",
      growthRate: "20% YoY",
      quarterWise: [
        { quarter: "Q1", sales: "₹380 Cr" },
        { quarter: "Q2", sales: "₹370 Cr" },
        { quarter: "Q3", sales: "₹380 Cr" },
        { quarter: "Q4", sales: "₹370 Cr" },
      ],
    },
    inventoryReport: {
      totalStock: 25000,
      warehouses: ["Mumbai", "Hyderabad", "Dubai"],
      damagedUnits: 500,
      lastAudit: "2024-12-15",
    },
    operationalExpenses: {
      annual: "₹600 Cr",
      marketing: "₹150 Cr",
      RnD: "₹200 Cr",
      logistics: "₹250 Cr",
    },
    targetsAndAchieved: {
      annualTarget: "₹1600 Cr",
      achieved: "₹1500 Cr",
      quarterWise: [
        { quarter: "Q1", target: "₹400 Cr", achieved: "₹380 Cr" },
        { quarter: "Q2", target: "₹400 Cr", achieved: "₹370 Cr" },
        { quarter: "Q3", target: "₹400 Cr", achieved: "₹380 Cr" },
        { quarter: "Q4", target: "₹400 Cr", achieved: "₹370 Cr" },
      ],
    },
    headOfBrand: "Ratan Kumar",
  },
];

export const mockLocations = [
  {
    brandName: "Bajaj",
    locations: [
      {
        locationName: "Pune, India",
        serviceDivisions: ["Bike", "Auto", "Commercial"],
        salesDetails: {
          totalSales: "1.2L",
          topProduct: "Bajaj Pulsar 150",
          growthRate: "15% YoY",
          quarterWise: [
            { quarter: "Q1", sales: "30K" },
            { quarter: "Q2", sales: "40K" },
            { quarter: "Q3", sales: "25K" },
            { quarter: "Q4", sales: "25K" },
          ],
        },
        inventoryReport: {
          totalStock: 3000,
          damagedUnits: 100,
          lastAudit: "2024-11-10",
        },
        operationalExpenses: {
          annual: "2L",
          marketing: "50K",
          RnD: "70K",
          logistics: "80K",
        },
        targetsAndAchieved: {
          annualTarget: "1.5L",
          achieved: "1.4L",
          quarterWise: [
            { quarter: "Q1", target: "40K", achieved: "30K" },
            { quarter: "Q2", target: "40K", achieved: "40K" },
            { quarter: "Q3", target: "40K", achieved: "35K" },
            { quarter: "Q4", target: "30K", achieved: "35K" },
          ],
        },
        headOfBrand: "Rajiv Bajaj",
      },
      {
        locationName: "Delhi, India",
        serviceDivisions: ["Bike", "Auto"],
        salesDetails: {
          totalSales: "1L",
          topProduct: "Bajaj Pulsar 150",
          growthRate: "10% YoY",
          quarterWise: [
            { quarter: "Q1", sales: "25K" },
            { quarter: "Q2", sales: "25K" },
            { quarter: "Q3", sales: "25K" },
            { quarter: "Q4", sales: "25K" },
          ],
        },
        inventoryReport: {
          totalStock: 2000,
          damagedUnits: 50,
          lastAudit: "2024-10-01",
        },
        operationalExpenses: {
          annual: "1.5L",
          marketing: "30K",
          RnD: "50K",
          logistics: "70K",
        },
        targetsAndAchieved: {
          annualTarget: "1.2L",
          achieved: "1L",
          quarterWise: [
            { quarter: "Q1", target: "30K", achieved: "25K" },
            { quarter: "Q2", target: "30K", achieved: "25K" },
            { quarter: "Q3", target: "30K", achieved: "25K" },
            { quarter: "Q4", target: "30K", achieved: "25K" },
          ],
        },
        headOfBrand: "Sunil Sharma",
      },
    ],
  },
  {
    brandName: "Triumph",
    locations: [
      {
        locationName: "Bengaluru, India",
        serviceDivisions: ["Bike", "Bike Accessories"],
        salesDetails: {
          totalSales: "90K",
          topProduct: "Triumph Bonneville",
          growthRate: "12% YoY",
          quarterWise: [
            { quarter: "Q1", sales: "20K" },
            { quarter: "Q2", sales: "25K" },
            { quarter: "Q3", sales: "20K" },
            { quarter: "Q4", sales: "25K" },
          ],
        },
        inventoryReport: {
          totalStock: 1500,
          damagedUnits: 30,
          lastAudit: "2024-09-15",
        },
        operationalExpenses: {
          annual: "1.2L",
          marketing: "20K",
          RnD: "40K",
          logistics: "60K",
        },
        targetsAndAchieved: {
          annualTarget: "1L",
          achieved: "95K",
          quarterWise: [
            { quarter: "Q1", target: "25K", achieved: "20K" },
            { quarter: "Q2", target: "25K", achieved: "25K" },
            { quarter: "Q3", target: "25K", achieved: "25K" },
            { quarter: "Q4", target: "25K", achieved: "25K" },
          ],
        },
        headOfBrand: "Muthyam Swamy",
      },
      {
        locationName: "Kochi, India",
        serviceDivisions: ["Bike", "Bike Accessories"],
        salesDetails: {
          totalSales: "1.1L",
          topProduct: "Triumph Bonneville",
          growthRate: "15% YoY",
          quarterWise: [
            { quarter: "Q1", sales: "30K" },
            { quarter: "Q2", sales: "30K" },
            { quarter: "Q3", sales: "25K" },
            { quarter: "Q4", sales: "25K" },
          ],
        },
        inventoryReport: {
          totalStock: 1800,
          damagedUnits: 40,
          lastAudit: "2024-08-20",
        },
        operationalExpenses: {
          annual: "1.3L",
          marketing: "25K",
          RnD: "45K",
          logistics: "70K",
        },
        targetsAndAchieved: {
          annualTarget: "1.25L",
          achieved: "1.15L",
          quarterWise: [
            { quarter: "Q1", target: "30K", achieved: "30K" },
            { quarter: "Q2", target: "30K", achieved: "30K" },
            { quarter: "Q3", target: "30K", achieved: "25K" },
            { quarter: "Q4", target: "35K", achieved: "30K" },
          ],
        },
        headOfBrand: "Sreeshanth",
      },
    ],
  },
  {
    brandName: "Vespa",
    locations: [
      {
        locationName: "Hyderabad, India",
        serviceDivisions: ["Scooter", "Scooter Accessories"],
        salesDetails: {
          totalSales: "80K",
          topProduct: "Vespa LX 125",
          growthRate: "10% YoY",
          quarterWise: [
            { quarter: "Q1", sales: "20K" },
            { quarter: "Q2", sales: "20K" },
            { quarter: "Q3", sales: "20K" },
            { quarter: "Q4", sales: "20K" },
          ],
        },
        inventoryReport: {
          totalStock: 1200,
          damagedUnits: 20,
          lastAudit: "2024-07-10",
        },
        operationalExpenses: {
          annual: "1L",
          marketing: "15K",
          RnD: "25K",
          logistics: "60K",
        },
        targetsAndAchieved: {
          annualTarget: "90K",
          achieved: "85K",
          quarterWise: [
            { quarter: "Q1", target: "25K", achieved: "20K" },
            { quarter: "Q2", target: "25K", achieved: "20K" },
            { quarter: "Q3", target: "20K", achieved: "20K" },
            { quarter: "Q4", target: "20K", achieved: "25K" },
          ],
        },
        headOfBrand: "Luigi Rossi",
      },
      {
        locationName: "Mumbai, India",
        serviceDivisions: ["Scooter", "Scooter Accessories"],
        salesDetails: {
          totalSales: "95K",
          topProduct: "Vespa LX 125",
          growthRate: "12% YoY",
          quarterWise: [
            { quarter: "Q1", sales: "25K" },
            { quarter: "Q2", sales: "25K" },
            { quarter: "Q3", sales: "20K" },
            { quarter: "Q4", sales: "25K" },
          ],
        },
        inventoryReport: {
          totalStock: 1300,
          damagedUnits: 30,
          lastAudit: "2024-06-05",
        },
        operationalExpenses: {
          annual: "1.1L",
          marketing: "20K",
          RnD: "30K",
          logistics: "60K",
        },
        targetsAndAchieved: {
          annualTarget: "1L",
          achieved: "92K",
          quarterWise: [
            { quarter: "Q1", target: "25K", achieved: "25K" },
            { quarter: "Q2", target: "25K", achieved: "25K" },
            { quarter: "Q3", target: "25K", achieved: "20K" },
            { quarter: "Q4", target: "25K", achieved: "22K" },
          ],
        },
        headOfBrand: "Aarti Desai",
      },
    ],
  },
  {
    brandName: "Tata",
    locations: [
      {
        locationName: "Mumbai, India",
        serviceDivisions: ["Passenger Vehicles", "Commercial Vehicles"],
        salesDetails: {
          totalSales: "2L",
          topProduct: "Tata Nexon",
          growthRate: "18% YoY",
          quarterWise: [
            { quarter: "Q1", sales: "50K" },
            { quarter: "Q2", sales: "50K" },
            { quarter: "Q3", sales: "50K" },
            { quarter: "Q4", sales: "50K" },
          ],
        },
        inventoryReport: {
          totalStock: 5000,
          damagedUnits: 100,
          lastAudit: "2024-05-20",
        },
        operationalExpenses: {
          annual: "3L",
          marketing: "50K",
          RnD: "100K",
          logistics: "150K",
        },
        targetsAndAchieved: {
          annualTarget: "2.5L",
          achieved: "2.3L",
          quarterWise: [
            { quarter: "Q1", target: "60K", achieved: "50K" },
            { quarter: "Q2", target: "60K", achieved: "50K" },
            { quarter: "Q3", target: "60K", achieved: "50K" },
            { quarter: "Q4", target: "70K", achieved: "60K" },
          ],
        },
        headOfBrand: "Natarajan Chandrasekaran",
      },
      {
        locationName: "Bangalore, India",
        serviceDivisions: ["Electric Vehicles", "Commercial Vehicles"],
        salesDetails: {
          totalSales: "1.8L",
          topProduct: "Tata Nexon EV",
          growthRate: "20% YoY",
          quarterWise: [
            { quarter: "Q1", sales: "45K" },
            { quarter: "Q2", sales: "45K" },
            { quarter: "Q3", sales: "45K" },
            { quarter: "Q4", sales: "45K" },
          ],
        },
        inventoryReport: {
          totalStock: 4500,
          warehouses: ["Bangalore", "Hyderabad"],
          damagedUnits: 80,
          lastAudit: "2024-04-15",
        },
        operationalExpenses: {
          annual: "2.8L",
          marketing: "40K",
          RnD: "90K",
          logistics: "150K",
        },
        targetsAndAchieved: {
          annualTarget: "2.2L",
          achieved: "2L",
          quarterWise: [
            { quarter: "Q1", target: "55K", achieved: "45K" },
            { quarter: "Q2", target: "55K", achieved: "45K" },
            { quarter: "Q3", target: "55K", achieved: "45K" },
            { quarter: "Q4", target: "55K", achieved: "50K" },
          ],
        },
        headOfBrand: "Prashant Kumar",
      },
    ],
  },
];