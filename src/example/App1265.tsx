
import { test, expect } from "@playwright/experimental-ct-react";
import App1265 from "./App1265.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1265 />);
  await expect(component).toContainText("Learn React");
});
