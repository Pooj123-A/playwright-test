
import { test, expect } from "@playwright/experimental-ct-react";
import App177 from "./App177.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App177 />);
  await expect(component).toContainText("Learn React");
});
