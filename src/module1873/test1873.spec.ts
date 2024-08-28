
import { test, expect } from "@playwright/experimental-ct-react";
import App1873 from "./App1873.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1873 />);
  await expect(component).toContainText("Learn React");
});
