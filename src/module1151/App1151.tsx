
import { test, expect } from "@playwright/experimental-ct-react";
import App1151 from "./App1151.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1151 />);
  await expect(component).toContainText("Learn React");
});
