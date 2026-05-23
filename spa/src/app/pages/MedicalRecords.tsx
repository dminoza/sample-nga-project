import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { FileText, CheckCircle2, AlertCircle } from "lucide-react";

export default function MedicalRecords() {
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
    <div className="space-y-6">
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
              <div
                key={record.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
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
                  <Badge
                    className={
                      record.status === "Normal"
                        ? "bg-green-100 text-green-700 hover:bg-green-100"
                        : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                    }
                  >
                    {record.status === "Normal" ? (
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                    ) : (
                      <AlertCircle className="w-3 h-3 mr-1" />
                    )}
                    {record.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    View
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
