
import { test, expect } from "@playwright/experimental-ct-react";
import App1849 from "./App1849.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1849 />);
  await expect(component).toContainText("Learn React");
});
