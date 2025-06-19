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
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { TbBrandYoutubeFilled } from "react-icons/tb";

export default function ContactFormSection() {
  return (
    <section className="w-full py-12 bg-white md:py-24 lg:py-32">
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
                <CardContent className="flex items-start p-6 space-x-4">
                  <Mail className="w-6 h-6 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium text-slate-900">Email</h3>
                    <p className="mt-1 text-sm text-slate-700">
                      Our friendly team is here to help.
                    </p>
                    <Link
                      href="mailto:support@mail.outreachful.com"
                      className="block mt-1 text-sm text-primary hover:underline"
                    >
                      support@mail.outreachful.com
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-start p-6 space-x-4">
                  <Phone className="w-6 h-6 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium text-slate-900">Phone</h3>
                    <p className="mt-1 text-sm text-slate-700">
                      Mon-Fri from 8am to 5pm.
                    </p>
                    <Link
                      href="tel:+1-555-123-4567"
                      className="block mt-1 text-sm text-primary hover:underline"
                    >
                      +1 (218) 231-1866
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-start p-6 space-x-4">
                  <MapPin className="w-6 h-6 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium text-slate-900">Office</h3>
                    <p className="mt-1 text-sm text-slate-700">
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
                <Link
                  href="https://www.facebook.com/uprankly"
                  className="text-slate-400 hover:text-primary"
                >
                  <FaFacebook className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/uprankly"
                  className="text-slate-400 hover:text-primary"
                >
                  <FaLinkedin className="w-6 h-6" />
                </Link>
                <Link
                  href="https://x.com/Uprankly"
                  className="text-slate-400 hover:text-primary"
                >
                  <RiTwitterXFill className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.youtube.com/@Uprankly"
                  className="text-slate-400 hover:text-primary"
                >
                  <TbBrandYoutubeFilled className="w-6 h-6" />
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
