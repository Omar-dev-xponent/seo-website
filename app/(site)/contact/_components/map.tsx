// @ts-nocheck

export default function Map() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              Visit our office
            </h2>
            <p className="mx-auto max-w-[700px] text-lg text-slate-700">
              We're located at Sheridan in USA
            </p>
          </div>
        </div>
        <div className="mt-12 overflow-hidden rounded-xl border">
          <div className="h-[400px] w-full bg-slate-200 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.7064530039524!2d-106.95659836976209!3d44.79806939464418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a6d206b%3A0x1887ab0668b2495c!2zMzAgTiBHb3VsZCBTdCBTdWl0ZSBSLCBTaGVyaWRhbiwgV1kgODI4MDEsIOCmruCmvuCmsOCnjeCmleCmv-CmqCDgpq_gp4HgppXgp43gpqTgprDgpr7gprfgp43gpp_gp43gprA!5e0!3m2!1sbn!2sbd!4v1744194923370!5m2!1sbn!2sbd"
              width="100%"
              height="400px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
