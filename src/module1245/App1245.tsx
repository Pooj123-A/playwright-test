
import { test, expect } from "@playwright/experimental-ct-react";
import App1245 from "./App1245.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1245 />);
  await expect(component).toContainText("Learn React");
});
