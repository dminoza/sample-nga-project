import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Separator } from "../components/ui/separator";

export default function Profile() {
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

  return (
    <div className="space-y-6">
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
    </div>
  );
}
