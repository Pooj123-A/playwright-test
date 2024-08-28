
import { test, expect } from "@playwright/experimental-ct-react";
import App523 from "./App523.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App523 />);
  await expect(component).toContainText("Learn React");
});
