import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { TrendingUp, CheckCircle2, Calendar, Pill } from "lucide-react";
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const vitalSigns = {
    heartRate: 72,
    bloodPressure: "120/80",
    temperature: 98.6,
    oxygenSaturation: 98,
    respiratoryRate: 16,
    weight: 145,
  };

  const healthMetrics = [
    { date: "Jan", heartRate: 68, bloodPressure: 118, weight: 148 },
    { date: "Feb", heartRate: 70, bloodPressure: 120, weight: 147 },
    { date: "Mar", heartRate: 72, bloodPressure: 119, weight: 146 },
    { date: "Apr", heartRate: 71, bloodPressure: 121, weight: 145 },
    { date: "May", heartRate: 72, bloodPressure: 120, weight: 145 },
  ];

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Michael Chen",
      specialty: "Cardiologist",
      date: "2026-05-15",
      time: "10:30 AM",
      type: "Follow-up",
    },
    {
      id: 2,
      doctor: "Dr. Emily Rodriguez",
      specialty: "General Practice",
      date: "2026-05-08",
      time: "2:00 PM",
      type: "Annual Checkup",
    },
  ];

  const activeMedications = [
    {
      id: 1,
      medication: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      status: "Active",
    },
    {
      id: 2,
      medication: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      status: "Active",
    },
    {
      id: 3,
      medication: "Vitamin D3",
      dosage: "2000 IU",
      frequency: "Once daily",
      status: "Active",
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome back, Sarah Johnson</CardTitle>
          <CardDescription>Here's your health overview</CardDescription>
        </CardHeader>
      </Card>

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

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>Your scheduled medical visits</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingAppointments.map((apt) => (
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

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Active Medications</CardTitle>
              <CardDescription>Current prescriptions</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {activeMedications.map((rx) => (
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
    </div>
  );
}
