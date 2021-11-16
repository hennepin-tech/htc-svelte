export const programs = [
  { name: 'Accounting Careers'},
  { name: 'Architectural Technology'},
  { name: 'Audio Production Specialist'},
  { name: 'Auto Body Collision Technology'},
  { name: 'Automation Robotics Engineering Technology'},
  { name: 'Automotive Mechanics Technology'},
  { name: 'Baking and Pastry'},
  { name: 'Building &amp; Landscape'},
  { name: 'Business'},
  { name: 'Cabinetmaking and Wood Product Design'},
  { name: 'Carpentry'},
  { name: 'Child Development'},
  { name: 'Community Paramedic'},
  { name: 'Culinary Arts'},
  { name: 'Dental Assistant'},
  { name: 'Electronics Technology'},
  { name: 'Emergency &amp; Public Service'},
  { name: 'Emergency Medical Services'},
  { name: 'Engineering CAD Technology'},
  { name: 'Environmental Health and Safety'},
  { name: 'Fire Protection' },
  { name: 'Fire Training' },
  { name: 'Fluid Power Technology' },
  { name: 'Food Truck Entrepreneur' },
  { name: 'Ford Asset' },
  { name: 'Graphic Design' },
  { name: 'Healthcare' },
  { name: 'Health Science' },
  { name: 'Health Unit Coordinator' },
  { name: 'Heating, Ventilation and Air Condition' },
  { name: 'Individualized Studies' },
  { name: 'Industrial Bldg Engineering and Maint' },
  { name: 'Information Technology/Computer Careers' },
  { name: 'Interactive Design Video Production' },
  { name: 'Landscape/Horticulture Careers' },
  { name: 'Law Enforcement' },
  { name: 'Light Rail Train Technology' },
  { name: 'Machine Tool Technology' },
  { name: 'Manufacturing Engineering Technology' },
  { name: 'Marine, Motorsport &amp; Power Equipment'},
  { name: 'Medical Assistant'},
  { name: 'Medical Office'},
  { name: 'Medium/Heavy Truck Technology'},
  { name: 'Music Business &amp; Entrepreneurship'},
  { name: 'Nursing Assistant'},
  { name: 'Office Careers'},
  { name: 'Pharmacy Technology'},
  { name: 'Plastics Technology'},
  { name: 'Plumbing Pre-Apprenticeship'},
  { name: 'Practical Nursing'},
  { name: 'Public Works'},
  { name: 'Station Tech'},
  { name: 'Undecided'},
  { name: 'Welding and Metal Fabrication'},
]

export const states = [ 
  "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", 
  "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", 
  "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", 
  "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", 
  "WI", "WV", "WY"
]

const currentYear = (new Date()).getFullYear();
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

export const years = range(currentYear, currentYear - 50, -1)