
import { test, expect } from "@playwright/experimental-ct-react";
import App1212 from "./App1212.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1212 />);
  await expect(component).toContainText("Learn React");
});
