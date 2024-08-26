
import { test, expect } from "@playwright/experimental-ct-react";
import App1266 from "./App1266.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1266 />);
  await expect(component).toContainText("Learn React");
});
