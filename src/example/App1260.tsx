
import { test, expect } from "@playwright/experimental-ct-react";
import App1260 from "./App1260.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1260 />);
  await expect(component).toContainText("Learn React");
});
