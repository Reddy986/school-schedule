// Fremont City Government Budget Data - FY 2025-26
// Total Operating Budget: $392.4 million (Adopted June 10, 2025)
//
// Note: Departmental allocations are modeled based on typical California city budget structures
// and confirmed data points. Total budget and reserves are official figures.
// See https://www.fremont.gov/government/departments/finance/financial-reports for official documents

const BUDGET_DATA = {
    fiscalYear: "2025-26",
    totalBudget: 392400000,
    adoptedDate: "June 10, 2025",

    // Reserve funds (confirmed)
    reserves: {
        contingency: 46400000, // For natural disasters/emergencies
        budgetUncertainty: 6700000
    },

    departments: [
        {
            id: "police",
            name: "Police Department",
            amount: 105000000, // ~26.7% - Major public safety investment
            color: "#3b82f6", // Blue
            description: "40+ new officers hired in past 18 months",
            divisions: [
                {
                    name: "Patrol Services",
                    amount: 52000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 42000000 },
                        { name: "Vehicles & Equipment", amount: 6500000 },
                        { name: "Operations & Supplies", amount: 2500000 },
                        { name: "Training", amount: 1000000 }
                    ]
                },
                {
                    name: "Investigation Services",
                    amount: 25000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 20000000 },
                        { name: "Forensics & Technology", amount: 3000000 },
                        { name: "Operations", amount: 2000000 }
                    ]
                },
                {
                    name: "Traffic Services",
                    amount: 12000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 9500000 },
                        { name: "Equipment & Motorcycles", amount: 1500000 },
                        { name: "Operations", amount: 1000000 }
                    ]
                },
                {
                    name: "Community Policing",
                    amount: 8000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 6500000 },
                        { name: "Community Programs", amount: 1000000 },
                        { name: "Operations", amount: 500000 }
                    ]
                },
                {
                    name: "Administrative Support",
                    amount: 8000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 6000000 },
                        { name: "Technology & Systems", amount: 1200000 },
                        { name: "Facilities & Operations", amount: 800000 }
                    ]
                }
            ]
        },
        {
            id: "fire",
            name: "Fire Department",
            amount: 82000000, // ~20.9% - Second largest department
            color: "#ef4444", // Red
            description: "New Station 6 fire truck company with 9 firefighters added",
            divisions: [
                {
                    name: "Emergency Response",
                    amount: 45000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 38000000 },
                        { name: "Equipment & Apparatus", amount: 4500000 },
                        { name: "Operations", amount: 2500000 }
                    ]
                },
                {
                    name: "Fire Prevention & Inspection",
                    amount: 12000000,
                    lineItems: [
                        { name: "Salaries & Benefits (2 new inspectors)", amount: 9500000 },
                        { name: "Inspection Equipment", amount: 1500000 },
                        { name: "Public Education", amount: 1000000 }
                    ]
                },
                {
                    name: "Emergency Medical Services",
                    amount: 15000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 12000000 },
                        { name: "Medical Equipment & Supplies", amount: 2000000 },
                        { name: "Training & Certification", amount: 1000000 }
                    ]
                },
                {
                    name: "Administrative Support",
                    amount: 10000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 7500000 },
                        { name: "Technology & Systems", amount: 1500000 },
                        { name: "Facilities Maintenance", amount: 1000000 }
                    ]
                }
            ]
        },
        {
            id: "public-works",
            name: "Public Works",
            amount: 65000000, // ~16.6%
            color: "#f59e0b", // Orange
            description: "Infrastructure, streets, and utilities maintenance",
            divisions: [
                {
                    name: "Street Maintenance & Operations",
                    amount: 22000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 12000000 },
                        { name: "Pavement Maintenance", amount: 6000000 },
                        { name: "Equipment & Materials", amount: 4000000 }
                    ]
                },
                {
                    name: "Engineering Services",
                    amount: 15000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 10000000 },
                        { name: "Design & Planning", amount: 3000000 },
                        { name: "Technology & Systems", amount: 2000000 }
                    ]
                },
                {
                    name: "Traffic & Transportation",
                    amount: 10000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 5000000 },
                        { name: "Signal Maintenance", amount: 2500000 },
                        { name: "Street Lights & Signs", amount: 2500000 }
                    ]
                },
                {
                    name: "Facilities Management",
                    amount: 12000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 6000000 },
                        { name: "Building Maintenance", amount: 4000000 },
                        { name: "Utilities & Operations", amount: 2000000 }
                    ]
                },
                {
                    name: "Environmental Services",
                    amount: 6000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 3500000 },
                        { name: "Storm Water Management", amount: 1500000 },
                        { name: "Environmental Programs", amount: 1000000 }
                    ]
                }
            ]
        },
        {
            id: "parks-recreation",
            name: "Parks & Recreation",
            amount: 42000000, // ~10.7%
            color: "#10b981", // Green
            description: "Community centers, parks, and recreation programs",
            divisions: [
                {
                    name: "Parks Maintenance",
                    amount: 18000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 11000000 },
                        { name: "Landscaping & Grounds", amount: 4000000 },
                        { name: "Equipment & Supplies", amount: 3000000 }
                    ]
                },
                {
                    name: "Recreation Programs",
                    amount: 12000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 8000000 },
                        { name: "Program Supplies", amount: 2500000 },
                        { name: "Facility Operations", amount: 1500000 }
                    ]
                },
                {
                    name: "Community Centers",
                    amount: 8000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 5000000 },
                        { name: "Facility Operations", amount: 2000000 },
                        { name: "Programs & Events", amount: 1000000 }
                    ]
                },
                {
                    name: "Capital Improvements",
                    amount: 4000000,
                    lineItems: [
                        { name: "Park Equipment Replacement", amount: 2000000 },
                        { name: "Facility Upgrades", amount: 1500000 },
                        { name: "New Park Development", amount: 500000 }
                    ]
                }
            ]
        },
        {
            id: "library",
            name: "Library Services",
            amount: 22000000, // ~5.6%
            color: "#8b5cf6", // Purple
            description: "Public libraries and information services",
            divisions: [
                {
                    name: "Branch Operations",
                    amount: 13000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 10000000 },
                        { name: "Facility Operations", amount: 2000000 },
                        { name: "Supplies & Materials", amount: 1000000 }
                    ]
                },
                {
                    name: "Collections & Materials",
                    amount: 5000000,
                    lineItems: [
                        { name: "Books & Media", amount: 3000000 },
                        { name: "Digital Resources", amount: 1500000 },
                        { name: "Periodicals & Subscriptions", amount: 500000 }
                    ]
                },
                {
                    name: "Programs & Services",
                    amount: 4000000,
                    lineItems: [
                        { name: "Youth Programs", amount: 1500000 },
                        { name: "Adult Programs", amount: 1500000 },
                        { name: "Technology Services", amount: 1000000 }
                    ]
                }
            ]
        },
        {
            id: "community-development",
            name: "Community Development",
            amount: 28000000, // ~7.1%
            color: "#ec4899", // Pink
            description: "Planning, building, and economic development",
            divisions: [
                {
                    name: "Planning & Zoning",
                    amount: 10000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 7000000 },
                        { name: "Planning Studies", amount: 2000000 },
                        { name: "Operations", amount: 1000000 }
                    ]
                },
                {
                    name: "Building & Safety",
                    amount: 11000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 8000000 },
                        { name: "Inspection Services", amount: 2000000 },
                        { name: "Technology & Systems", amount: 1000000 }
                    ]
                },
                {
                    name: "Economic Development",
                    amount: 7000000,
                    lineItems: [
                        { name: "Business Development Programs", amount: 3500000 },
                        { name: "Salaries & Benefits", amount: 2500000 },
                        { name: "Business District Activation", amount: 1000000 }
                    ]
                }
            ]
        },
        {
            id: "homelessness",
            name: "Homelessness Services",
            amount: 8000000, // Confirmed amount
            color: "#06b6d4", // Cyan
            description: "Homeless prevention and support services",
            divisions: [
                {
                    name: "Keep Fremont Housed Program",
                    amount: 2500000,
                    lineItems: [
                        { name: "Rental Assistance", amount: 1500000 },
                        { name: "Case Management", amount: 700000 },
                        { name: "Program Operations", amount: 300000 }
                    ]
                },
                {
                    name: "Homeless Support Services",
                    amount: 3000000,
                    lineItems: [
                        { name: "Shelter Services", amount: 1500000 },
                        { name: "Outreach Programs", amount: 1000000 },
                        { name: "Supportive Services", amount: 500000 }
                    ]
                },
                {
                    name: "Encampment Services",
                    amount: 2000000,
                    lineItems: [
                        { name: "Cleanup Operations", amount: 1200000 },
                        { name: "Outreach & Engagement", amount: 500000 },
                        { name: "Waste Management Fees", amount: 300000 }
                    ]
                },
                {
                    name: "Overdose Prevention",
                    amount: 500000,
                    lineItems: [
                        { name: "Prevention Programs", amount: 300000 },
                        { name: "Naloxone Distribution", amount: 128000 },
                        { name: "Education & Training", amount: 72000 }
                    ]
                }
            ]
        },
        {
            id: "general-government",
            name: "General Government",
            amount: 40400000, // ~10.3% - Remaining balance
            color: "#64748b", // Slate
            description: "City administration, finance, and support services",
            divisions: [
                {
                    name: "City Manager's Office",
                    amount: 8000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 6000000 },
                        { name: "Operations", amount: 1500000 },
                        { name: "Special Projects", amount: 500000 }
                    ]
                },
                {
                    name: "Finance Department",
                    amount: 12000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 9000000 },
                        { name: "Financial Systems", amount: 2000000 },
                        { name: "Operations", amount: 1000000 }
                    ]
                },
                {
                    name: "Human Resources",
                    amount: 7000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 5000000 },
                        { name: "Recruitment & Training", amount: 1200000 },
                        { name: "Employee Programs", amount: 800000 }
                    ]
                },
                {
                    name: "City Attorney",
                    amount: 6000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 4000000 },
                        { name: "Legal Services", amount: 1500000 },
                        { name: "Operations", amount: 500000 }
                    ]
                },
                {
                    name: "City Clerk & Elections",
                    amount: 3400000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 2500000 },
                        { name: "Election Operations", amount: 600000 },
                        { name: "Records Management", amount: 300000 }
                    ]
                },
                {
                    name: "Information Technology",
                    amount: 4000000,
                    lineItems: [
                        { name: "Salaries & Benefits", amount: 2500000 },
                        { name: "Systems & Infrastructure", amount: 1000000 },
                        { name: "Software & Licenses", amount: 500000 }
                    ]
                }
            ]
        }
    ],

    // Data sources and notes
    sources: [
        {
            title: "FY 2025-26 Budget Adoption",
            url: "https://www.fremont.gov/Home/Components/News/News/1320/1067",
            description: "Official budget announcement from City Manager"
        },
        {
            title: "Financial Reports",
            url: "https://www.fremont.gov/government/departments/finance/financial-reports",
            description: "Comprehensive financial reports and budget documents"
        },
        {
            title: "Budget Overview",
            url: "https://patch.com/california/fremont/fremont-faces-economic-headwinds-2025-26-budget",
            description: "Detailed budget analysis and breakdown"
        }
    ],

    // Disclaimer
    disclaimer: "Note: Departmental budget allocations are modeled based on typical California city budget structures and available public information. The total operating budget ($392.4M), reserves, and homelessness services funding are confirmed official figures. For detailed official budget documents, please visit the City of Fremont's Financial Reports page."
};

// Helper functions for data access
function formatCurrency(amount) {
    if (amount >= 1000000) {
        return '$' + (amount / 1000000).toFixed(1) + 'M';
    } else if (amount >= 1000) {
        return '$' + (amount / 1000).toFixed(0) + 'K';
    }
    return '$' + amount.toLocaleString();
}

function formatCurrencyFull(amount) {
    return '$' + amount.toLocaleString();
}

function calculatePercentage(amount, total) {
    return ((amount / total) * 100).toFixed(1) + '%';
}

function getDepartmentById(id) {
    return BUDGET_DATA.departments.find(dept => dept.id === id);
}

function getDepartmentByName(name) {
    return BUDGET_DATA.departments.find(dept => dept.name === name);
}
