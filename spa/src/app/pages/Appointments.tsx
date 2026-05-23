import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Calendar, Clock } from "lucide-react";

export default function Appointments() {
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

  return (
    <div className="space-y-6">
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
                    <div
                      className={`p-3 rounded-lg ${
                        apt.status === "Upcoming"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
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
                    <Badge
                      className={
                        apt.status === "Upcoming"
                          ? "bg-green-100 text-green-700 hover:bg-green-100"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                      }
                    >
                      {apt.status}
                    </Badge>
                    {apt.status === "Upcoming" && (
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                        <Button variant="outline" size="sm">
                          Cancel
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
