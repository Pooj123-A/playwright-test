
import { test, expect } from "@playwright/experimental-ct-react";
import App475 from "../example/App475.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App475 />);
  await expect(component).toContainText("Learn React");
});
