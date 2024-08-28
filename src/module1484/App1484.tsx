
import { test, expect } from "@playwright/experimental-ct-react";
import App1484 from "./App1484.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1484 />);
  await expect(component).toContainText("Learn React");
});
