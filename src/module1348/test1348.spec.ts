
import { test, expect } from "@playwright/experimental-ct-react";
import App1348 from "./App1348.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1348 />);
  await expect(component).toContainText("Learn React");
});
