
import { test, expect } from "@playwright/experimental-ct-react";
import App1750 from "./App1750.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1750 />);
  await expect(component).toContainText("Learn React");
});
