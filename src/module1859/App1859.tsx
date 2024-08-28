
import { test, expect } from "@playwright/experimental-ct-react";
import App1859 from "./App1859.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1859 />);
  await expect(component).toContainText("Learn React");
});
