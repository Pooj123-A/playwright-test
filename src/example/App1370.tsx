
import { test, expect } from "@playwright/experimental-ct-react";
import App1370 from "./App1370.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1370 />);
  await expect(component).toContainText("Learn React");
});
