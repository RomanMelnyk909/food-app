import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created by{" "}
          <span className={styles.highlight}>You</span>
        </h1>
        <p>Choose your favourite recipe and cook it yourself</p>
        <p className={styles.cta}>
          <Link href="/meals/share"> Share Your favourite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Meals Loading ...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
