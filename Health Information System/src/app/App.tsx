import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Progress } from "./components/ui/progress";
import { Separator } from "./components/ui/separator";
import {
  Activity,
  Calendar,
  FileText,
  Heart,
  Pill,
  User,
  TrendingUp,
  Clock,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock patient data
  const patientInfo = {
    name: "Sarah Johnson",
    age: 34,
    gender: "Female",
    bloodType: "A+",
    mrn: "MRN-2024-001234",
    phone: "+1 (555) 123-4567",
    email: "sarah.johnson@email.com",
    address: "123 Main Street, Boston, MA 02118",
  };

  // Mock vital signs data
  const vitalSigns = {
    heartRate: 72,
    bloodPressure: "120/80",
    temperature: 98.6,
    oxygenSaturation: 98,
    respiratoryRate: 16,
    weight: 145,
  };

  // Mock health metrics over time
  const healthMetrics = [
    { date: "Jan", heartRate: 68, bloodPressure: 118, weight: 148 },
    { date: "Feb", heartRate: 70, bloodPressure: 120, weight: 147 },
    { date: "Mar", heartRate: 72, bloodPressure: 119, weight: 146 },
    { date: "Apr", heartRate: 71, bloodPressure: 121, weight: 145 },
    { date: "May", heartRate: 72, bloodPressure: 120, weight: 145 },
  ];

  // Mock appointments
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Michael Chen",
      specialty: "Cardiologist",
      date: "2026-05-15",
      time: "10:30 AM",
      status: "Upcoming",
      type: "Follow-up",
    },
    {
      id: 2,
      doctor: "Dr. Emily Rodriguez",
      specialty: "General Practice",
      date: "2026-05-08",
      time: "2:00 PM",
      status: "Upcoming",
      type: "Annual Checkup",
    },
    {
      id: 3,
      doctor: "Dr. Michael Chen",
      specialty: "Cardiologist",
      date: "2026-04-12",
      time: "11:00 AM",
      status: "Completed",
      type: "Consultation",
    },
  ];

  // Mock prescriptions
  const prescriptions = [
    {
      id: 1,
      medication: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      prescribedBy: "Dr. Michael Chen",
      startDate: "2026-01-15",
      refills: 3,
      status: "Active",
    },
    {
      id: 2,
      medication: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      prescribedBy: "Dr. Emily Rodriguez",
      startDate: "2025-11-20",
      refills: 5,
      status: "Active",
    },
    {
      id: 3,
      medication: "Vitamin D3",
      dosage: "2000 IU",
      frequency: "Once daily",
      prescribedBy: "Dr. Emily Rodriguez",
      startDate: "2026-02-01",
      refills: 2,
      status: "Active",
    },
  ];

  // Mock medical records
  const medicalRecords = [
    {
      id: 1,
      type: "Lab Results",
      title: "Complete Blood Count",
      date: "2026-04-20",
      provider: "Boston Medical Lab",
      status: "Normal",
    },
    {
      id: 2,
      type: "Imaging",
      title: "Chest X-Ray",
      date: "2026-04-12",
      provider: "Dr. Michael Chen",
      status: "Normal",
    },
    {
      id: 3,
      type: "Lab Results",
      title: "Lipid Panel",
      date: "2026-03-15",
      provider: "Boston Medical Lab",
      status: "Attention Required",
    },
    {
      id: 4,
      type: "Report",
      title: "Annual Physical Exam",
      date: "2026-01-10",
      provider: "Dr. Emily Rodriguez",
      status: "Normal",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">HealthCare Portal</h1>
                <p className="text-sm text-gray-600">Patient Health Information System</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback className="bg-blue-600 text-white">SJ</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto">
            <TabsTrigger value="dashboard" className="gap-2">
              <Activity className="w-4 h-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="appointments" className="gap-2">
              <Calendar className="w-4 h-4" />
              Appointments
            </TabsTrigger>
            <TabsTrigger value="records" className="gap-2">
              <FileText className="w-4 h-4" />
              Records
            </TabsTrigger>
            <TabsTrigger value="prescriptions" className="gap-2">
              <Pill className="w-4 h-4" />
              Medications
            </TabsTrigger>
            <TabsTrigger value="profile" className="gap-2">
              <User className="w-4 h-4" />
              Profile
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Patient Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Welcome back, {patientInfo.name}</CardTitle>
                <CardDescription>Here's your health overview</CardDescription>
              </CardHeader>
            </Card>

            {/* Current Vital Signs */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Heart Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <div className="text-3xl font-bold">{vitalSigns.heartRate}</div>
                    <div className="text-sm text-gray-600">bpm</div>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>Normal</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Blood Pressure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <div className="text-3xl font-bold">{vitalSigns.bloodPressure}</div>
                    <div className="text-sm text-gray-600">mmHg</div>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Optimal</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Temperature</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <div className="text-3xl font-bold">{vitalSigns.temperature}</div>
                    <div className="text-sm text-gray-600">°F</div>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Normal</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Oxygen Saturation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <div className="text-3xl font-bold">{vitalSigns.oxygenSaturation}</div>
                    <div className="text-sm text-gray-600">%</div>
                  </div>
                  <Progress value={vitalSigns.oxygenSaturation} className="mt-3" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Weight</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <div className="text-3xl font-bold">{vitalSigns.weight}</div>
                    <div className="text-sm text-gray-600">lbs</div>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-blue-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>-3 lbs this month</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Respiratory Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <div className="text-3xl font-bold">{vitalSigns.respiratoryRate}</div>
                    <div className="text-sm text-gray-600">breaths/min</div>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Normal</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Health Trends */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Heart Rate Trend</CardTitle>
                  <CardDescription>Last 5 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={healthMetrics}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="heartRate" stroke="#3b82f6" fill="#93c5fd" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Weight Progress</CardTitle>
                  <CardDescription>Last 5 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={healthMetrics}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="weight" stroke="#10b981" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Upcoming Appointments</CardTitle>
                    <CardDescription>Your scheduled medical visits</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments.filter(apt => apt.status === "Upcoming").map((apt) => (
                    <div key={apt.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold">{apt.doctor}</div>
                          <div className="text-sm text-gray-600">{apt.specialty}</div>
                          <div className="text-sm text-gray-500 mt-1">
                            {apt.date} at {apt.time}
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline">{apt.type}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Active Medications */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Active Medications</CardTitle>
                    <CardDescription>Current prescriptions</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {prescriptions.slice(0, 3).map((rx) => (
                    <div key={rx.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-100 text-purple-600 p-2 rounded">
                          <Pill className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold">{rx.medication}</div>
                          <div className="text-sm text-gray-600">
                            {rx.dosage} - {rx.frequency}
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                        {rx.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>All Appointments</CardTitle>
                    <CardDescription>Manage your medical appointments</CardDescription>
                  </div>
                  <Button>
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule New
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments.map((apt) => (
                    <div key={apt.id} className="border rounded-lg p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-4">
                          <div className={`p-3 rounded-lg ${apt.status === "Upcoming" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}>
                            <Calendar className="w-6 h-6" />
                          </div>
                          <div className="space-y-2">
                            <div>
                              <h3 className="font-semibold text-lg">{apt.doctor}</h3>
                              <p className="text-gray-600">{apt.specialty}</p>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {apt.date}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {apt.time}
                              </div>
                            </div>
                            <Badge variant="outline">{apt.type}</Badge>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge className={apt.status === "Upcoming" ? "bg-green-100 text-green-700 hover:bg-green-100" : "bg-gray-100 text-gray-700 hover:bg-gray-100"}>
                            {apt.status}
                          </Badge>
                          {apt.status === "Upcoming" && (
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">Reschedule</Button>
                              <Button variant="outline" size="sm">Cancel</Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Medical Records Tab */}
          <TabsContent value="records" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Medical Records</CardTitle>
                    <CardDescription>Your health documents and test results</CardDescription>
                  </div>
                  <Button variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Upload Document
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {medicalRecords.map((record) => (
                    <div key={record.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold">{record.title}</div>
                          <div className="text-sm text-gray-600">{record.provider}</div>
                          <div className="text-sm text-gray-500 mt-1">{record.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{record.type}</Badge>
                        <Badge className={record.status === "Normal" ? "bg-green-100 text-green-700 hover:bg-green-100" : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"}>
                          {record.status === "Normal" ? (
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                          ) : (
                            <AlertCircle className="w-3 h-3 mr-1" />
                          )}
                          {record.status}
                        </Badge>
                        <Button variant="ghost" size="sm">View</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Prescriptions Tab */}
          <TabsContent value="prescriptions" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Prescriptions & Medications</CardTitle>
                    <CardDescription>Manage your medications and refills</CardDescription>
                  </div>
                  <Button variant="outline">Request Refill</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {prescriptions.map((rx) => (
                    <div key={rx.id} className="border rounded-lg p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-4">
                          <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                            <Pill className="w-6 h-6" />
                          </div>
                          <div className="space-y-3">
                            <div>
                              <h3 className="font-semibold text-lg">{rx.medication}</h3>
                              <p className="text-gray-600">{rx.dosage} - {rx.frequency}</p>
                            </div>
                            <Separator />
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <div className="text-gray-600">Prescribed By</div>
                                <div className="font-medium">{rx.prescribedBy}</div>
                              </div>
                              <div>
                                <div className="text-gray-600">Start Date</div>
                                <div className="font-medium">{rx.startDate}</div>
                              </div>
                              <div>
                                <div className="text-gray-600">Refills Remaining</div>
                                <div className="font-medium">{rx.refills}</div>
                              </div>
                              <div>
                                <div className="text-gray-600">Status</div>
                                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                                  {rx.status}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Request Refill</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Patient Profile</CardTitle>
                <CardDescription>Your personal and medical information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-blue-600 text-white text-2xl">SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold">{patientInfo.name}</h2>
                    <p className="text-gray-600">Medical Record Number: {patientInfo.mrn}</p>
                  </div>
                </div>

                <Separator />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Personal Information</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-gray-600">Age</div>
                        <div className="font-medium">{patientInfo.age} years</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Gender</div>
                        <div className="font-medium">{patientInfo.gender}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Blood Type</div>
                        <div className="font-medium">{patientInfo.bloodType}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Contact Information</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-gray-600">Phone</div>
                        <div className="font-medium">{patientInfo.phone}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Email</div>
                        <div className="font-medium">{patientInfo.email}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Address</div>
                        <div className="font-medium">{patientInfo.address}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Emergency Contact</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm text-gray-600">Name</div>
                      <div className="font-medium">John Johnson</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Relationship</div>
                      <div className="font-medium">Spouse</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Phone</div>
                      <div className="font-medium">+1 (555) 234-5678</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex gap-3">
                  <Button>Edit Profile</Button>
                  <Button variant="outline">Download Health Summary</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Medical History</CardTitle>
                <CardDescription>Conditions and allergies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Current Conditions</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Hypertension</Badge>
                    <Badge variant="outline">Type 2 Diabetes</Badge>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Allergies</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Penicillin</Badge>
                    <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Peanuts</Badge>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Immunizations</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>COVID-19 Vaccine</span>
                      <span className="text-sm text-gray-600">2025-11-15</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Influenza Vaccine</span>
                      <span className="text-sm text-gray-600">2025-10-01</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}