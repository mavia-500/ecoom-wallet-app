import React from "react";
import Link from "next/link";

const reviews = [
  {
    name: "Ahmed Khan",
    city: "Lahore",
    rating: 5,
    comment:
      "Amazing quality leather. The stitching is neat and it feels premium in hand — worth every rupee.",
  },
  {
    name: "Sara Ali",
    city: "Karachi",
    rating: 5,
    comment:
      "Ordered as a gift for my husband. COD was easy and the wallet looked even better in person.",
  },
  {
    name: "Hassan Malik",
    city: "Islamabad",
    rating: 5,
    comment:
      "Fast delivery via TCS. Cards fit perfectly and the leather smell is genuine — highly recommend.",
  },
  {
    name: "Fatima Raza",
    city: "Rawalpindi",
    rating: 4,
    comment:
      "Beautiful craftsmanship. Bought one for my brother and he uses it every day now.",
  },
  {
    name: "Omar Syed",
    city: "Faisalabad",
    rating: 5,
    comment:
      "Best wallet I've owned in this price range. Compact, sturdy, and gets compliments.",
  },
  {
    name: "Ayesha Noor",
    city: "Multan",
    rating: 5,
    comment:
      "WhatsApp support answered quickly before I ordered. Packaging was careful and clean.",
  },
];

const HomeReviews = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cognac)]">
          Customer love
        </p>
        <h2 className="font-display mt-2 text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
          What buyers say
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--ink-soft)]">
          Real feedback from customers across Pakistan who shopped with cash on
          delivery.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={review.name}
            className="flex flex-col bg-[var(--surface)] p-5 sm:p-6"
            style={{ border: "1px solid var(--line)" }}
          >
            <div
              className="flex"
              aria-label={`${review.rating} out of 5 stars`}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-sm ${
                    star <= review.rating
                      ? "text-[var(--cognac)]"
                      : "text-[var(--line)]"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ink-soft)]">
              “{review.comment}”
            </p>
            <div className="mt-5 border-t pt-4" style={{ borderColor: "var(--line)" }}>
              <p className="font-medium text-[var(--ink)]">{review.name}</p>
              <p className="text-xs text-[var(--ink-soft)]">{review.city}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/products"
          className="btn-primary inline-block rounded-md px-6 py-3 text-sm"
        >
          Shop bestsellers
        </Link>
      </div>
    </section>
  );
};

export default HomeReviews;
