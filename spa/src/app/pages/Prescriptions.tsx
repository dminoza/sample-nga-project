import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Pill } from "lucide-react";

export default function Prescriptions() {
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

  return (
    <div className="space-y-6">
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
                        <p className="text-gray-600">
                          {rx.dosage} - {rx.frequency}
                        </p>
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
                  <Button variant="outline" size="sm">
                    Request Refill
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
