
import { test, expect } from "@playwright/experimental-ct-react";
import App1304 from "./App1304.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1304 />);
  await expect(component).toContainText("Learn React");
});
