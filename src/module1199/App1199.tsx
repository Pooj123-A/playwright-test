
import { test, expect } from "@playwright/experimental-ct-react";
import App1199 from "./App1199.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1199 />);
  await expect(component).toContainText("Learn React");
});
