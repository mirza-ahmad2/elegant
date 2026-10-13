import { useState, type FormEvent } from "react";

type Values = { name: string; email: string; phone: string; address: string; job: string };
const empty: Values = { name: "", email: "", phone: "", address: "", job: "" };

function validate(v: Values) {
  const e: Partial<Record<keyof Values, string>> = {};
  if (!v.name.trim()) e.name = "Please tell us your name.";
  if (!v.email.trim()) e.email = "We need an email to reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "That email doesn’t look quite right.";
  if (v.phone && !/^[\d\s().+-]{7,}$/.test(v.phone)) e.phone = "Please enter a valid phone number.";
  return e;
}

export function ProjectForm({ compact = false }: { compact?: boolean }) {
  const [v, setV] = useState<Values>(empty);
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [sent, setSent] = useState(false);
  const errors = validate(v);

  const set = (k: keyof Values) => (e: { target: { value: string } }) => setV({ ...v, [k]: e.target.value });
  const blur = (k: keyof Values) => () => setTouched({ ...touched, [k]: true });
  const show = (k: keyof Values) => touched[k] && errors[k];

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true });
    if (Object.keys(errors).length) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div role="status" className="rise border-l border-wood py-6 pl-8">
        <p className="annotation">Intake received</p>
        <h3 className="font-display mt-4 text-4xl">Thanks for reaching out!</h3>
        <p className="mt-3 text-muted-foreground">We’ve received your message and will get back to you shortly.</p>
      </div>
    );
  }

  const Field = ({ k, label, type = "text", req = false, hint, auto }: { k: keyof Values; label: string; type?: string; req?: boolean; hint?: string; auto?: string }) => (
    <div>
      <label htmlFor={`f-${k}`} className="eyebrow">{label}{req && <span className="text-wood"> *</span>}</label>
      <input
        id={`f-${k}`} name={k} type={type} autoComplete={auto} value={v[k]} onChange={set(k)} onBlur={blur(k)}
        required={req} aria-invalid={show(k) ? true : undefined} aria-describedby={`f-${k}-msg`} className="field"
      />
      <p id={`f-${k}-msg`} className={`mt-2 text-xs ${show(k) ? "text-destructive" : "text-muted-foreground"}`}>{show(k) || hint || "\u00a0"}</p>
    </div>
  );

  const Step = ({ n, title, children }: { n: string; title: string; children: React.ReactNode }) => (
    <fieldset className="grid gap-6 border-t border-line pt-8 md:grid-cols-12">
      <legend className="sr-only">{title}</legend>
      <div className="md:col-span-4" aria-hidden>
        <span className="annotation">{n}</span>
        <p className="font-display mt-2 text-2xl">{title}</p>
      </div>
      <div className="grid gap-4 md:col-span-8">{children}</div>
    </fieldset>
  );

  return (
    <form noValidate onSubmit={submit} className="space-y-10" aria-label="Project intake">
      {!compact && <p className="eyebrow">Project intake · takes about a minute</p>}
      <Step n="01" title="Your details">
        {Field({ k: "name", label: "Name", req: true, auto: "name" })}
        <div className="grid gap-4 sm:grid-cols-2">
          {Field({ k: "email", label: "Email", type: "email", req: true, auto: "email" })}
          {Field({ k: "phone", label: "Phone", type: "tel", auto: "tel", hint: "Optional, if you’d prefer a call." })}
        </div>
      </Step>
      <Step n="02" title="Project location">
        {Field({ k: "address", label: "Address", auto: "street-address", hint: "Optional, helps us understand the site." })}
      </Step>
      <Step n="03" title="Tell us about the space">
        <div>
          <label htmlFor="f-job" className="eyebrow">Tell us about your job</label>
          <textarea id="f-job" name="job" rows={4} value={v.job} onChange={set("job")} className="field resize-y"
            placeholder="Kitchen, closet, built-ins… new build or renovation?" />
        </div>
      </Step>
      <div className="flex flex-wrap items-center gap-6 border-t border-line pt-8">
        <button type="submit" className="btn btn-primary">Start your project →</button>
        <p className="text-xs text-muted-foreground">Fields marked * are required.</p>
      </div>
    </form>
  );
}
