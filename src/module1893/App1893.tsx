
import { test, expect } from "@playwright/experimental-ct-react";
import App1893 from "./App1893.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1893 />);
  await expect(component).toContainText("Learn React");
});
