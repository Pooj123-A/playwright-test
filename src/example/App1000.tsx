
import { test, expect } from "@playwright/experimental-ct-react";
import App1000 from "./App1000.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1000 />);
  await expect(component).toContainText("Learn React");
});
