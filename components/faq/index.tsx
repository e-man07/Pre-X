import { FAQAccordion } from './faq-accordion';

export function FAQ() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-green-400/70 max-w-2xl mx-auto">
          Find answers to common questions about our platform
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <FAQAccordion />
      </div>
    </section>
  );
}