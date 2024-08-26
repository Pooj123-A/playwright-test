
import { test, expect } from "@playwright/experimental-ct-react";
import App1182 from "./App1182.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1182 />);
  await expect(component).toContainText("Learn React");
});
