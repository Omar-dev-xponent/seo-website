import { Card, CardContent } from "@/components/ui/card";
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "./form";

export default function ContactFormSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-medium tracking-tight text-slate-900">
                Contact Information
              </h2>
              <p className="mt-2 text-slate-700">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-slate-900">Email</h3>
                    <p className="text-sm text-slate-700 mt-1">
                      Our friendly team is here to help.
                    </p>
                    <Link
                      href="mailto:support@mail.outreachful.com"
                      className="text-sm text-primary hover:underline mt-1 block"
                    >
                      support@mail.outreachful.com
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-slate-900">Phone</h3>
                    <p className="text-sm text-slate-700 mt-1">
                      Mon-Fri from 8am to 5pm.
                    </p>
                    <Link
                      href="tel:+1-555-123-4567"
                      className="text-sm text-primary hover:underline mt-1 block"
                    >
                      +1 (218) 231-1866
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-slate-900">Office</h3>
                    <p className="text-sm text-slate-700 mt-1">
                      30 N Gould St Ste R Sheridan,
                      <br />
                      WY, 82801, USA
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-slate-900">Follow us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-slate-400 hover:text-primary">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-primary">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-primary">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-primary">
                  <Github className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
