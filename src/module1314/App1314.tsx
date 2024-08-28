
import { test, expect } from "@playwright/experimental-ct-react";
import App1314 from "./App1314.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1314 />);
  await expect(component).toContainText("Learn React");
});
